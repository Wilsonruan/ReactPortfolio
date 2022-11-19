import React from 'react';
import { useState, createContext, useRef } from "react";
import Announcer from './Announcer';

export const FlashcardsContext = createContext()
export const GlobalFun = createContext()

export default function ProviderComponent(props) {

    const QUERY = '(prefers-reduced-motion: reduce)';
    const mediaQueryList = window.matchMedia(QUERY);

    const contextInformation = {
        ...JSON.parse(JSON.stringify(props.config)),
        
        reduceMotion: mediaQueryList.matches,
        announcements: "",
        current: 0,
        containerRef: useRef(null),
        bottomRef: useRef(null),
        isPlaying: false,
        lastPlayedAudioIcon: "",
        lastPlayedAudio: null,
        inTransform: false,
        inBottom: false,
        resetFlipped: false,
        isFrontCard: true,
        
        updateContext: (contextUpdates) => {
            setContextInfo(currentContextInfo => ({ ...currentContextInfo, ...contextUpdates }));
        }
    }

    const [contextInfo, setContextInfo] = useState(contextInformation);

    var middleRef = [];
    var getElAttr = [];
    var midClassName = ["flash-card-front", "flash-card-back", "flash-play-btn", "flip-card-corner-button"];

    const globalFun = {
        stopAudio: () => {
            const audioElementPath = contextInfo.containerRef.current.children

            for (let i = 0; i < audioElementPath.length; i++) {
                const audioHtmlButton = audioElementPath[i].getElementsByClassName("flash-pause-btn")[0]
    
                if (audioHtmlButton !== undefined) {
                    audioHtmlButton.classList.remove('flash-pause-btn');
                    audioHtmlButton.classList.add('flash-play-btn');
                    audioHtmlButton.setAttribute('aria-hidden', false);
                    audioHtmlButton.setAttribute('title', "play audio");
                }
    
                contextInfo.lastPlayedAudio.dataset.playing = 'false';
                contextInfo.lastPlayedAudio.pause();
                contextInfo.lastPlayedAudio.currentTime = 0;
                contextInfo.lastPlayedAudio.load();
            }
        },
        mapMiddleRef: () => {
            midClassName.map((className) => {
                middleRef.push(...contextInfo.containerRef.current.getElementsByClassName(className))
            })
        },
        setCurrentFocus: (e) => {
            e.preventDefault();
            if (contextInfo.reduceMotion) { //Start: Prevent crashing 
                setTimeout(() => { 
                    globalFun.findCurrentFocus();
                }, 10);
            } else {
                contextInfo.updateContext({ inTransform: true });
                setTimeout(() => { 
                    globalFun.findCurrentFocus();
                }, 1000);
            } //End: Prevent crashing 
        },
        findCurrentFocus: () => {
            globalFun.mapMiddleRef();
            contextInfo.updateContext({ inTransform: false });
            let focusValue = globalFun.findTabIndex([...middleRef])[0];
            focusValue.focus();
        }, 
        arrowNavigation: (position, e) => {//arrows keyboard function
            const bottomRef = contextInfo.bottomRef.current.children;
            globalFun.mapMiddleRef();
            getElAttr = [...middleRef, ...bottomRef];
            for (var i = 0; i < globalFun.findTabIndex(getElAttr).length; i++) {
                if (globalFun.findTabIndex(getElAttr)[i] === document.activeElement) {
                   var focusValue = globalFun.findTabIndex(getElAttr)[i + position];
                }
            }
            try { // Prevents arrows from crashing
                focusValue.focus();
                e.preventDefault();
             } catch (err) {}; 
        },
        // checks to make sure that the items we grabbed have to be tabbed through
        findTabIndex: (elements) => {//finds all cards that have tabindex
        var tabZero = Array.prototype.filter.call(elements,
            (el) => { { return el.tabIndex == 0 } })
        return tabZero;
        }
    }   

    return (
        <FlashcardsContext.Provider value={contextInfo}>
            <GlobalFun.Provider value={globalFun}>
                {props.children}
            </GlobalFun.Provider>
        </FlashcardsContext.Provider>
    )
}