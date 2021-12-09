import React from "react";
import { Error } from "./Error";
import { LoadingIcon } from "./LoadingIcon";
import { CurrencyForm } from "./CurrencyForm";
import { Source } from "./Source";

// mockData - for demo page to show the functionality without API key
const mockData = {
  "success": true,
  "timestamp": 1619432343,
  "base": "EUR",
  "date": "2021-04-26",
  "rates": {

    "BRL": 6.622404,
    "EUR": 1,
    "USD": 1.209504

  }
};

export class DataController extends React.Component {
  static displayName = "DataController";
  state = {
    data: undefined,
    error: undefined,
    loading: false,
  };

  componentDidMount() {
    this.setState({ data: mockData });
    // this.loadData();
  }

  loadData = () => {
    const { url } = this.props;
    this.setState({ loading: true });
    fetch(url)
      .then(resp => resp.json())
      .then(
        (data) => {
          if (data.error) {
            this.setState({
              loading: false,
              error: data.error,
            });
          }
          else {
            this.setState({
              loading: false,
              data,
            });
          }
        },
        (error) => {
          this.setState({
            loading: false,
            error,
          });
        }
      );
  }

  render() {
    const { url } = this.props;
    const { error, loading, data } = this.state;

    if (error) {
      return <Error message={error.message || error.info} />;
    }

    if (loading) {
      return <LoadingIcon />;
    }

    if (!data?.base || !data?.rates) {
      return (<Error message="Não há resultados para exibir. Por favor, tente novamente mais tarde.." />);
    }

    const { base, rates, date } = data;

    return (<>
      <CurrencyForm base={base} rates={rates} />
      <Source url={url} date={date} />
    </>);
  }
}
