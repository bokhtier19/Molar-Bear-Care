import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";

const VideoPlayer = () => {
    const videos = [video1, video2, video3, video4];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    // Handle video end (transition to next video)
    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    // Load new video and play when index changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load(); // Reload the video
            videoRef.current.play(); // Start playback
            videoRef.current.playbackRate = 4; // Set speed to 2x
        }
    }, [currentVideoIndex]);

    return (
        <AnimatePresence>
            <motion.video
                key={currentVideoIndex} // Ensures the video component remounts when the index changes
                ref={videoRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
                autoPlay
                muted
                onEnded={handleVideoEnd} // Trigger on video end to move to the next one
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <source src={videos[currentVideoIndex]} type="video/mp4" />
                Your browser does not support the video tag.
            </motion.video>
        </AnimatePresence>
    );
};

export default VideoPlayer;
