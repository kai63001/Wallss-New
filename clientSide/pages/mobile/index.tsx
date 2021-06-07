import axios from 'axios';
import IndexAll from '../desktop/index'

const MobileIndexAll = (props) => {
    return (<IndexAll data={props.data} />)
}

export async function getServerSideProps({ params, req, query }) {
    const page = query?.page || 1;
    const data = await (
      await axios.get(`${process.env.HOST}/desktop/all?type=1&page=${page}`)
    ).data;
    return {
      props: {
        data,
      },
    };
  }
  

export default MobileIndexAll