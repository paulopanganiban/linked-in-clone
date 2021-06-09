import React from 'react'
import styled from 'styled-components'
import CreateIcon from '@material-ui/icons/Create'
function Feed() {
    return (
       <FeedContainer>
         <FeedInputContainer>
            <div className="feed__input">
                <CreateIcon />
            </div>
         </FeedInputContainer>
       </FeedContainer>
    )
}

export default Feed
const FeedInputContainer = styled.div`

`
const FeedContainer = styled.div`

`