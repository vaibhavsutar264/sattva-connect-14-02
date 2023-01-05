<?php

namespace App\Http\Controllers;

use App\EnxRtc\Errors;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Models\EnablexLiveStream;
use App\Models\LatestModerator;

class EnableXController extends Controller
{
    public function curlOperations($options)
    {
        $ch = curl_init(config('app.enx_url') . "{$options['url']}");

        $headers = array(
            'Content-Type: application/json',
            'Authorization: Basic ' . base64_encode(config('app.enx_app_id') . ":" . config('app.enx_app_key')),
        );

        curl_setopt($ch, CURLOPT_HTTPHEADER, isset($options['headers']) ? $options['headers'] : $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_POST, isset($options['type']) && $options['type'] === 'POST' ? true : false);

        if ($options['type'] && $options['type'] === 'POST') {
            curl_setopt($ch, CURLOPT_POSTFIELDS, $options['data']);
        }

        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }
    
    public function createRoom(Request $request)
    {
        /* Create Room Meta */
        $Room = array(
            "name" => "sattvaconnect",
            "owner_ref" => "saraswati",
            "settings" => array(
                "description" => "Sattva Connect Live Streaming",
                "quality" => "SD",
                "mode" => $request->mode,
                "participants" => "199",
                "duration" => "180",
                "scheduled" => false,
                "auto_recording" => false,
                "active_talker" => true,
                "wait_moderator" => false,
                "adhoc" => false,
            ),
            "sip" => array(
                "enabled" => false,
            ),
        );

        $Room_Meta = json_encode($Room);
        $response = $this->curlOperations(['type' => 'POST', 'url' => '/rooms', 'data' => $Room_Meta]);
        
        $data = json_decode($response,true);

        return $data;
        
        $room = $data["room"];
        
        
        EnablexLiveStream::create([
           'name' => $room["name"],
            'service_id' => $room["service_id"],
            'owner_ref' => $room["owner_ref"],
            'mode' => $room["settings"]["mode"],
            'room_id' => $room["room_id"],
            'created_time' => $room["created"],          
        ]);

                return $response;
    }

    public function getRoom(Request $request)
    {
        $roomId = $request->route('room');
        if (!$roomId) {
            $error = Errors::getError(4001);
            $error["desc"] = "Failed to get roomId from URL";
            return response()->json($error);
        }

        $response = $this->curlOperations(['type' => 'GET', 'url' => "/rooms/" . $roomId]);
            $jObj = json_decode($response,true);
        return response($jObj["room"]["name"]);
    }

    public function createToken(Request $request)
    {
         $room = EnablexLiveStream::select('room_id')->orderBy('id','DESC')->first();
        
        if (!$request->name && !$request->role && !$room->room_id) {
            $error = Errors::getError(4004); // Required JSON Key missing
            $error["desc"] = "JSON keys missing: name, role or roomId";
            return response()->json($error);
        }
        $Token = array(
            "name" => $request->name,
            "role" => $request->role,
            "user_ref" => $request->user_ref,
        );

        $Token_Payload = json_encode($Token);

        $response = $this->curlOperations(['type' => 'POST', 'url' => "/rooms/" . $room->room_id . "/tokens", 'data' => $Token_Payload]);
        return response($response);

    }
    
    public function getAllRooms() {
        $response = $this->curlOperations(['type' => 'GET', 'url' => '/rooms']);
        
        $data = json_decode($response,true);
        
        return $data;
    }
    
    public function deleteRoom($roomId) {
        $response = $this->curlOperations(['type' => 'DELETE', 'url' => "/rooms/" . $roomId]);
        
        $data = json_decode($response,true);
        
        return $data;
    }
    
    public function getLatestRoom() {
        
       $data = EnablexLiveStream::select('room_id')->orderBy('id','DESC')->first();
       
       return response()->json($data->room_id);
    }
    
    public function getEnablexUrl() {
      $data = EnablexLiveStream::select('room_id','name')->orderBy('id','DESC')->first();
      
      $url_viewer = config('app.enx_iframe_src').'/'. $data->room_id ;
      $url_moderator = config('app.enx_iframe_src').'/host/'. base64_encode($data->room_id .'-'.config('app.enx_app_id')) ;
      
      
      return response()->json(['viewer'=>$url_viewer,'moderator'=>$url_moderator,'details'=>$data->name]);
     
    }
    

    public function confo(Request $request, $room, $type, $ref)
    {
        return \view('confo')->with(['roomId' => $room, 'user_ref' => $ref, 'usertype' => $type]);
    }
    
    public function storeLatest(Request $request) {
        try {
            
        $res = EnablexLiveStream::select('room_id')->orderBy('id','DESC')->first();

//            
//           $Room = array(
//            "name" => $request->name,
//            "settings" => array(
//                "description" => "Sattva Connect Live Streaming with".$request->name,
//            )
//        );
//
//        $Room_Meta = json_encode($Room);
//        $response = $this->curlOperations(['type' => 'PATCH', 'url' => '/rooms/'.$res->room_id, 'data' => $Room_Meta]);
//        
//        $data = json_decode($response,true);
//        
//        $room = $data["room"];
        
        $data = EnablexLiveStream::where('room_id',$res->room_id)->update([
           'name'  => $request->name
        ]);
        
       
             
       return response()->json($data);
            
        } catch (Exception $exc) {
            return $exc->getTraceAsString();
        }

    }
    
    
}

