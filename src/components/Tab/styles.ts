import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '../Touchable';
import constants from '../../lib/constants';

interface TabBodyProps {
  tabHeight: number;
}

export const TabBody = styled.View<TabBodyProps>`
  height: ${props => props.tabHeight};
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  padding-right: 12px;
`;

interface TabButtonProps {
  tabWidth: number;
  tabActive: boolean;
  tabIndicatorColor: string;
}

export const TabButton = styled(Button)<TabButtonProps>`
  width: ${props => props.tabWidth};
  border-bottom-width: ${constants.indicatorHeight};
  border-bottom-color: ${props =>
    props.tabActive ? props.tabIndicatorColor : 'transparent'};
`;

interface TabTextProps {
  color: string;
}

export const TabText = styled.Text<TabTextProps>`
  color: ${props => props.color};
  font-weight: ${Platform.OS === 'ios' ? 500 : 400};
  font-family: ${Platform.OS === 'android' ? 'sans-serif-medium' : 'System'};
  font-size: 14;
  text-align: center;
  min-width: 100%;
`;
