import { Card } from 'antd';
import styled from 'styled-components';

const imageLayout = ({ layout: { image } }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: ${image.size}%;
  }
  margin-bottom: ${image.mb}px;
`;

const titleLayout = ({ layout: { title } }) => `
  margin-bottom: ${title.mb}px;
  
  display: -webkit-box;
  -webkit-line-clamp: ${title.lineCamp};
  -webkit-box-orient: vertical;
  
  height: ${title.lineCamp * 22}px;
`;

const descriptionLayout = ({ layout: { detail } }) => `
  margin-bottom: ${detail.mb}px;
`;

const boxShadow = () => `
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  transition: box-shadow 0.3s ease-in-out;
`;

export const StyledCardProductContainer = styled(Card)`
  text-align: center;

  :hover {
    ${({ showBoxShadow }) => showBoxShadow && boxShadow()};

    .quick-action {
      display: flex;
    }
  }

  .ant-card-cover {
    ${imageLayout}
  }

  .ant-card-body {
    padding: 15px;
    padding-top: 0px;
  }

  .ant-card-meta {
    margin-bottom: 6px;

    .ant-card-meta-title {
      white-space: initial;
      font-size: 14px;
      ${titleLayout}
    }

    .ant-card-meta-description {
      ${descriptionLayout};
    }
  }
`;
