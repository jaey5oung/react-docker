import React from "react";
import SearchPresenter from "./SearchPresenter";
import {moviesApi} from "api";

export default class extends React.Component {
    state = {
        movieResults: null,
        searchTerm: "",
        error: null,
        loading: false
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {searchTerm} = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    };

    updateTerm = event => {
        const {target: {
                value
            }} = event;
        this.setState({searchTerm: value});
    };
    searchByTerm = async () => {
        const {searchTerm} = this.state;
        this.setState({loading: true});
        try {
            const {
                data: {
                    results: movieResults
                }
            } = await moviesApi.search(searchTerm);
            this.setState({movieResults});
        } catch  {
            this.setState({ error: "Can't find results." });
        } finally {
            this.setState({loading: false});
        }
    };

    render() {
        const {movieResults, searchTerm, error, loading} = this.state;
        console.log(this.state)
        return (
            <SearchPresenter
                movieResults={movieResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
                />
        );
    }
}