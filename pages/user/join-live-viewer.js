import React, { Component, useEffect, useState } from 'react';

import Header from '../../components/user/common/Header';
import Footer from '../../components/user/common/Footer';
import axios from 'axios';
import { apiRoute, getApiHeader, getLocalStorageAuth } from '../../utils/helpers';
import Link from 'next/link';

const JoinLiveViewer = () => {
    const [name, setName] = useState();
    const [viewerUrl, setViewerUrl] = useState('');
    const [moderator, setModerator] = useState('');


    useEffect(() => {

        var Name = "Not known";
        // if (navigator.appVersion.indexOf("Win") != -1) Name = 
        //   "Windows OS";
        // if (navigator.appVersion.indexOf("Mac") != -1) alert("It is recommended to use the  Safari on apple device")

        // if (navigator.appVersion.indexOf("X11") != -1) Name = 
        //   "UNIX OS";
        // if (navigator.appVersion.indexOf("Linux") != -1) Name = 
        //   "Linux OS";

        // if (navigator.appVersion.indexOf("Mac") != -1) {
        //     var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        //     if (!isChrome) {
        //         alert("Please use Chrome browser for better livestreaming services.");
        //     }
        // }



        const requestOptions = {
            headers: getApiHeader(true),
        };

        axios.get(apiRoute('enablex-get-iframe-url'),
            requestOptions
        )
            .then(function (response) {
                setViewerUrl(response.data.viewer);
                setModerator(response.data.details);
            })
            .catch(function (error) {
                console.log(error);
            });



        const users = getLocalStorageAuth();
        if (users) {
            console.log(users);
            const userName = users.userDetails.first_name;
            setName(userName);
        }
    }, [])

    return (
        <>

            <Header />
            <div className='light-purplebg py-80' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className='broadcast-header mob-mt-5'>
                    <div className='live-stream-header'>
                        <h4 className='user-name revamp-subheading mb-0' style={{ color: 'black' }}>
                            Sattva Connect Live Studio
                        </h4>
                        <Link href="/user/live-stream">
                            <a className='btn btn-sm min-w-80 ml-3'>
                                <i className="fas fa-sign-out-alt" /> Exit live stream
                            </a>
                        </Link>
                    </div>
                </div>

                <iframe id='enxScreen' width={1200}
                    allow="camera;  microphone;fullscreen; speaker; display-capture"
                    src={viewerUrl + `?video=no&audio=no&name=${name}`}>
                </iframe>
            </div>
            <Footer />
        </>
    );
}
export default JoinLiveViewer;
