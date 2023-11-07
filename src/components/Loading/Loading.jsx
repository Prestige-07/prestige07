import { Backdrop } from './Loading.styled';
import { Hourglass } from 'react-loader-spinner';

export const Loading = () => (
  <Backdrop>
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={['var(--accent-color)', '#72a1ed']}
    />
  </Backdrop>
);
