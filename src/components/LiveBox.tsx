import React from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';

import { Live } from '../types';

interface Props {
  live: Live
}

interface ImageProps {
  streaming: boolean;
}

const Image = styled.img`
  width: 100%;
  border: ${(props: ImageProps) => (props.streaming ? 'red' : 'lightgray')} solid 2px;
`;

const Thumbnail = styled.a`
  display: block;
  width: 100%;
`;

const Card = styled.div`
  color: #444;
`;

const Box = styled.div`
  width: clamp(176px, 46vw, 250px);
  padding: .125rem;
`;

const Time = styled.time`
  color: grey;
  font-weight: bold;
`;

function LiveBox({ live }: Props) {
  const {
    link, livePreviewImage, time, streamer, guests, title, streaming,
  } = live;
  const names = [streamer, ...guests];

  return (
    <Box>
      <Card>
        <Time>
          {dayjs(time).format('HH:mm')}
        </Time>
        <Thumbnail href={link}>
          <Image alt="video-preview" src={livePreviewImage} streaming={streaming} />
        </Thumbnail>
        {title && title.slice(0, 20)}
        <br />
        {names.join(' ')}
      </Card>
    </Box>
  );
}

export default LiveBox;
