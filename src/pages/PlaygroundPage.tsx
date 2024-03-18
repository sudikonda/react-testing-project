import TagList from '../components/TagList.tsx';
import ToastDemo from '../components/ToastDemo.tsx';
import OrderStatusSelector from '../components/OrderStatusSelector.tsx';

const PlaygroundPage = () => {
   return <OrderStatusSelector onChange={value => console.log(value)} />

};
export default PlaygroundPage;
