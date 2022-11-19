import React, { useContext } from 'react';
import { FlashcardsContext, GlobalFun } from './Provider';
import '../css/Bottom.scss';

function Bottom() {
    const context = useContext(FlashcardsContext)
    const globalFun = useContext(GlobalFun)
    const savedFirstCard = context.items[0];

    const nextSlide = () => { //Next Carousel button
        context.updateContext({
            current: context.current === context.items.length - 1 ? 0 : context.current + 1
        })
    };

    const prevSlide = () => { //Prev Carousel button
        context.updateContext({
            current: context.current === 0 ? context.items.length - 1 : context.current - 1
        })
    };

    const randSlide = (e) => { // Random Carousel button
        e.preventDefault();
        if (context.inTransform) return; // Exit function if in motion
        if (context.lastPlayedAudio) globalFun.stopAudio();
    
        for (let i = context.items.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [context.items[i], context.items[j]] = [context.items[j], context.items[i]];
        }
        context.updateContext({ 
          current: 0,
          announcements: "shuffle",
          resetFlipped: true
        });
        if (context.items[0] === savedFirstCard) [context.items[0], context.items[1]] = [context.items[1], context.items[0]];
      }
    

    return (
        <div 
        className='bottom-container' 
        ref={context.bottomRef}
        onFocus={() => {context.updateContext({ inBottom: true })}} 
        onBlur={() => {context.updateContext({ inBottom: false })}}
      >
            <button className='prev-arrow' onClick={prevSlide} />
            <button className='rand-arrow' onClick={randSlide}><div> &nbsp;Shuffle</div></button>
            <button className='next-arrow' onClick={nextSlide} />
        </div>
    )
}

export default Bottom;
