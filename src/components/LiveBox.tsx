import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import dayjs from 'dayjs';

import { Live } from '../types';

interface Props {
  live: Live
}

interface ImageProps {
  streaming: boolean;
}

const ImageContainer = styled.div`
  display: flex;
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

const TitleBox = styled.div`
  height: 2.3rem;
  overflow: hidden;
`;
const NameBox = styled.div`
  color: var(--main-text-color);
`;

function LiveBox({ live }: Props) {
  const {
    link, livePreviewImage, time, streamer, guests, streaming, title,
  } = live;
  const names = [streamer, ...guests];
  const timeStr = dayjs(time).format('HH:mm');

  return (
    <Box>
      <Card>
        <strong><time>{timeStr}</time></strong>
        <Thumbnail rel="noopener noreferrer" target="_blank" href={link}>
          {livePreviewImage && (
            <ImageContainer  streaming={streaming}>
              <Image
                alt="video-preview" src={livePreviewImage}
                width="320"
                height="180"
                quality="95"
              />
            </ImageContainer>
          )}
        </Thumbnail>
        <NameBox>{names.join('、')}</NameBox>
        <TitleBox>
          {title}
        </TitleBox>
      </Card>
    </Box>
  );
}

export default LiveBox;
