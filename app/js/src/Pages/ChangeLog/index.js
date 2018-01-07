import React, {Component} from 'react';
import showdown from 'showdown';
import fs from 'fs';
import path from 'path';

export default class Welcome extends Component
{
    state = {
        content: null,
    };

    componentDidMount = () => {

        this.setState({
            content: fs.readFileSync(path.resolve(process.env.PWD, 'CHANGELOG.md'), 'utf8'),
        });
    }

    render = () => {

        const converter = new showdown.Converter({
            tables: true,
            tasklists: true,
        });

        return (
            <div>
                <div className="hero is-small is-primary is-bold">
                    <div className="hero-body">
                        <h1 className="title">Change log</h1>
                        <h2 className="subtitle">v0.0.1</h2>
                    </div>
                </div>

                <div className="section">
                    <div className="container">
                        <div className="content">
                            <div dangerouslySetInnerHTML={{__html: converter.makeHtml(this.state.content)}}>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    };
}