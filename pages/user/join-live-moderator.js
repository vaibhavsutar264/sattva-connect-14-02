import React, { Component, useEffect, useState } from 'react';

import Header from '../../components/user/common/Header';
import Footer from '../../components/user/common/Footer';
import axios from 'axios';
import { apiRoute, getApiHeader, getLocalStorageAuth } from '../../utils/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';

const JoinLiveModerator = () => {
    const [name, setName] = useState();
    const [moderatorUrl, setModeratorUrl] = useState('');
    const [moderator, setModerator] = useState('');
    const router = useRouter();

    useEffect(() => {

        const users = getLocalStorageAuth();
        if (users) {
            const userName = users.userDetails.first_name;
            setName(userName);
        }

        const requestOptions = {
            headers: getApiHeader(true),
        };

        axios.post(apiRoute('latest-moderator'), {
            name: users.userDetails.first_name,
        }, requestOptions)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


        axios.get(apiRoute('enablex-get-iframe-url'),
            requestOptions
        )
            .then(function (response) {
                setModeratorUrl(response.data.moderator);
                setModerator(response.data.details)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const deleteLiveNotification = () => {
        const requestOptions = {
            headers: getApiHeader(true),
        };
        console.log('clicked')
        axios.get(apiRoute('delete-teacher-live-notifications'), requestOptions)
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
        router.push(`/user/live-stream`);
    }
    return (
        <>

            <Header />
            <div className='light-purplebg py-80' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className='broadcast-header'>
                    <div className='live-stream-header'>
                        <h4 className='user-name revamp-subheading mb-0' style={{ color: 'black' }}>
                            Sattva Connect Live Studio
                        </h4>
                        {/* <Link href="/user/live-stream"> */}
                        <a className='btn btn-sm min-w-100 ml-3' onClick={deleteLiveNotification}>
                            <i className="fas fa-sign-out-alt" /> Exit live stream
                        </a>
                        {/* </Link> */}
                    </div>
                </div>

                <iframe id='enxScreen' width={1200}
                    allow="camera;  microphone;fullscreen; speaker; display-capture"
                    src={moderatorUrl + `?video=no&audio=no&name=${name}`}>
                </iframe>
            </div>
            <Footer />
        </>
    );
}
export default JoinLiveModerator;
