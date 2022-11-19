
import React, { useContext } from 'react';
import { FlashcardsContext } from './Provider';

const Announcer = React.memo((props) => {
    // With react memo, react memorizes the the result
    // Meaning that if the new props are the same then it will skip the next rendering
    // If the contents of the props changes, then react will re-render

    let messageContent = props.message;
    const context = useContext(FlashcardsContext);
    const currentTitle = context.items[context.current];
    const cardTitle = currentTitle.title;
    const _headerFront = currentTitle.headerValueFront ? currentTitle.headerValueFront : "";
    const _headerBack = currentTitle.headerValueBack ? currentTitle.headerValueBack : "";
    const _altFront = currentTitle.textValueFront ? currentTitle.textValueFront : "";
    const _altBack = currentTitle.textValueBack ? currentTitle.textValueBack : "";
    const _imageFront = currentTitle.imgFront ? currentTitle.imgFront[1] : "";
    const _imageBack = currentTitle.imgBack ? currentTitle.imgBack[1] : "";

    const message = () => {
        switch(messageContent) {
            case 'shuffle':
                return `Cards have been shuffled. Current card number ${context.current + 1} of ${context.items.length}. ${cardTitle !== undefined ? "Card title: " + cardTitle : ""}`;
            case 'nextBtn':
                return `Next button pressed: Current card number ${context.current + 1} of ${context.items.length}. ${cardTitle !== undefined ? "Card title: " + cardTitle : ""}` ;
            case 'prevBtn':
                return `Previous button pressed: Current card number ${context.current + 1} of ${context.items.length}. ${cardTitle !== undefined ? "Card title: " + cardTitle : ""}`;
            case 'current':
                return `Current card number ${context.current + 1} of ${context.items.length}. You are on the ${context.isFrontCard ? `front card. ${_imageFront} ${_headerFront} ${_altFront}` : `back card. ${_imageBack} ${_headerBack} ${_altBack}`} `;
            case 'flipping':
                return `Card flipped.`;
            default:
                return '';
        }
    }

    // aria-live region for announcements
    return (
        <div role="alert" aria-live="polite" aria-atomic="true" className="sr-only">
            { message() }
        </div>
    );
})
export default Announcer;