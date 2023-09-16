import React, {FC} from 'react';
import ReactPlayer from 'react-player';

import styles from './VideoComponent.module.css';

import {IVideo, IVideosProps} from "../../interfaces";


const VideoComponent: FC<IVideosProps> = ({video}) => {

    return (
        <div className={styles.container}>
            {video.map(v => (
                <div key={v.id} className={styles['video-container']}>
                    <h2 className={styles['video-title']}>{v.name}</h2>
                    <ReactPlayer
                        className={styles['react-player']}
                        url={`https://www.youtube.com/watch?v=${v.key}`}
                        width="100%"
                        controls={true}

                    />
                </div>
            ))}
        </div>
    );
};

export {VideoComponent};
