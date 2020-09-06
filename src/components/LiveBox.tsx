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
  border: ${(props: ImageProps) => (props.streaming ? 'red' : '#444')} solid 2px;
`;

const Thumbnail = styled.a`
  display: block;
  width: 100%;
`;

const Card = styled.div`
`;

const Box = styled.div`
  width: clamp(158px, 49vw, 250px);
  padding: clamp(.125rem, .53vw, .25rem);
  padding-bottom: clamp(.375rem, 1.5vw, .5rem);
`;

const Time = styled.time`
  font-weight: bold;
`;

function LiveBox({ live }: Props) {
  const {
    link, livePreviewImage, time, streamer, guests, streaming,
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
        {names.join(' ')}
      </Card>
    </Box>
  );
}

export default LiveBox;
