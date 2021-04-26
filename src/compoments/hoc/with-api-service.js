import { ApiServiceConsumer } from '../api-service-context';


const WithApiService = (Wrapped) => {
  return (props) => {
      return (
          <ApiServiceConsumer>
              {
                  (apiService) => {
                      return <Wrapped { ...props } apiService={ apiService }/>;
                  }
              }
          </ApiServiceConsumer>
      );
  };
};


export {
    WithApiService,
};
