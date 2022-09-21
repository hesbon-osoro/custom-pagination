import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .pageCard {
    height: 36px;
    padding: 0 15px;
    background: transparent;
    border: 1px solid #b7bcce;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 0 6px;
    color: #b9bdcf;
    cursor: pointer;

    &:not([disabled]):hover {
      border: 1px solid #1e86ff;
      color: #1e86ff;
    }
  }
  .pageCard.active {
    background: #1e86ff;
    border: 1px solid #1e86ff;
    color: #fff;
  }
`;

export const MorePaginationIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 36px;
  width: 36px;
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 0 0.5rem;
`;
