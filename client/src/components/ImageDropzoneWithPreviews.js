import { useEffect, useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
  margin: 0.75em auto 2em;

  .title {
    color: #4a4a4a;
    font-size: 16px;
    line-height: 1.5;
  }

  .sub {
    font-size: 14px;
    line-height: 1.29;
    color: #b2b2b2;
  }
`;

export default function ImageDropzoneWithPreviews(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*'});

  return (
    <div className="container">
      <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
        <div className="title">+ Choose an image…</div>
        <div className="sub" >.JPG, .GIF or .PNG max. 5mb</div>
      </Container>
    </div>
  );
}