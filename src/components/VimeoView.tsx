import * as styles from '../styles/card.module.css';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { FaPlay, FaPause } from 'react-icons/fa';
import { BiFullscreen } from 'react-icons/bi';

type ScrubberProps = {
  playerRef: React.RefObject<any>;
};

const Scrubber = memo(({ playerRef }: ScrubberProps) => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const onScrubberChange = useCallback(
    (e) => {
      const newTime = (e.target.value / 100) * duration;
      playerRef.current.setCurrentTime(newTime);
    },
    [duration],
  );

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (playerRef.current) {
        const duration = await playerRef.current.getDuration();
        const currentTime = await playerRef.current.getCurrentTime();
        setDuration(duration);
        setCurrentTime(currentTime);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [playerRef]);

  return (
    <input
      type="range"
      min="0"
      max="100"
      value={duration > 0 ? (currentTime / duration) * 100 : 0}
      onChange={onScrubberChange}
      style={{
        flexGrow: 1,
        marginLeft: '10px',
        marginRight: '10px',
        cursor: 'pointer',
      }}
    />
  );
});

type PlayerControlsProps = {
  playerRef: React.RefObject<any>;
  hovered: boolean;
  onFullscreen: () => void;
  credits: {
    title: string;
    creditDescription: string;
  };
  isFullScreen: boolean;
};

const PlayerControls = memo(
  ({
    playerRef,
    hovered,
    onFullscreen,
    credits,
    isFullScreen,
  }: PlayerControlsProps) => {
    const [playing, setPlaying] = useState(false);

    const handlePlayPause = async () => {
      if (playerRef.current) {
        if (playing) {
          try {
            await playerRef.current.pause();
            setPlaying(false);
          } catch (error) {
            console.error(
              'Error occurred when trying to pause the video:',
              error,
            );
          }
        } else {
          try {
            await playerRef.current.play();
            setPlaying(true);
          } catch (error) {
            console.error(
              'Error occurred when trying to play the video:',
              error,
            );
          }
        }
      }
    };

    const CustomButton = ({ onClick, icon }) => {
      return (
        <button
          style={{
            border: 'none',
            background: 'none',
            padding: '0',
            opacity: 1,
            transition: '0.3s',
            cursor: 'pointer',
          }}
          onClick={onClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          {icon}
        </button>
      );
    };

    return (
      <div
        style={{
          position: 'absolute',
          bottom: '0px',
          left: '0',
          right: '0',
          top: '0',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyItems: 'center',
            color: 'white',
            padding: '10px',
            backgroundColor: 'black',
            opacity: hovered && !isFullScreen ? 0.7 : 0,
            transition: '0.3s',
          }}
        >
          <div className={styles.cardInfo}>
            <p>{credits.title}</p>
          </div>
          <div className={styles.cardDescriptionContainer}>
            <span className={styles.cardDescriptionText}>
              {credits.creditDescription}
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 8px 10px 8px',
            backgroundColor: 'black',
            opacity: hovered ? 0.7 : 0,
            transition: '0.3s',
          }}
        >
          <CustomButton
            onClick={handlePlayPause}
            icon={playing ? <FaPause size={20} /> : <FaPlay size={20} />}
          />

          <Scrubber playerRef={playerRef} />
          <CustomButton
            onClick={onFullscreen}
            icon={<BiFullscreen size={25} />}
          />
        </div>
      </div>
    );
  },
);

export const VimeoView = ({ video, imageObj, credits }) => {
  const [hovered, setHover] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef<any | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleReady = (player) => {
    playerRef.current = player;
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current) {
        setIsFullscreen(true);
        if (containerRef.current.requestFullscreen) {
          containerRef.current.requestFullscreen();
        }
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Vimeo
        video={video}
        width={'100%'}
        height={'100%'}
        controls={false}
        responsive={true}
        onReady={handleReady}
      />
      <PlayerControls
        playerRef={playerRef}
        hovered={hovered}
        onFullscreen={handleFullscreen}
        credits={credits}
        isFullScreen={isFullscreen}
      />
    </div>
  );
};
