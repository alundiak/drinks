import React from 'react';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

const SwipeableDrinksList = () => {
    return (
        <SwipeableList>
            <SwipeableListItem
                swipeLeft={{
                    content: <div>Revealed content during swipe</div>,
                    action: () => console.info('swipe action triggered')
                }}
                swipeRight={{
                    content: <div>Revealed content during swipe</div>,
                    action: () => console.info('swipe action triggered')
                }}
            >
                <div>Item name</div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default SwipeableDrinksList;