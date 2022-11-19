import React, { useContext } from 'react';
import { FlashcardsContext, GlobalFun } from './Provider';
import Card from './Card';
import Top from './Top';
import Bottom from './Bottom';

function Carousel(props) {

  const context = useContext(FlashcardsContext)
  const globalFun = useContext(GlobalFun);

  const onKeyDown = e => {
    if (context.inTransform) { // If in motion, stop user actions
      e.preventDefault();
      return;
    } else if (e.key === 'ArrowUp' || (e.key === 'ArrowLeft' && context.inBottom)) {
      globalFun.arrowNavigation(-1, e);
    } else if (e.key === 'ArrowDown' || (e.key === 'ArrowRight' && context.inBottom)) {
      globalFun.arrowNavigation(1, e);
    } else if (e.key === 'ArrowLeft') {
      context.updateContext({
        current: context.current === 0 ? context.items.length - 1 : context.current - 1,
        resetFlipped: true
      });
      globalFun.setCurrentFocus(e);
    } else if (e.key === 'ArrowRight') {
      context.updateContext({
        current: context.current === context.items.length - 1 ? 0 : context.current + 1,
        resetFlipped: true
      });
      globalFun.setCurrentFocus(e);
    }
    if (context.lastPlayedAudio) globalFun.stopAudio();
  }

  return (
    <div className='flashcards-container' onKeyDown={onKeyDown}>
      <Top
        instruction={context.instruction}
      />
      {context.items.map((items, index) => {
        return (
          <div className={'carousel-container'}>
            <div class="card-display-container" ref={context.containerRef}>
              {index === context.current && ( //Carousel items will appear below:
                <Card
                  keyId={index}
                  items={items}
                  reduceMotion={props.reduceMotion}
                />
              )}
            </div>
          </div>
        )
      })}
      <Bottom />
    </div>
  )
}

export default Carousel

