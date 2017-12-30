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
            content: fs.readFileSync(path.resolve(process.env.PWD, 'readme.md'), 'utf8'),
        });
    }

    render = () => {

        const converter = new showdown.Converter({
            tables: true,
            tasklists: true,
        });

        return (
            <div>
                <div className="hero is-medium is-primary is-bold">
                    <div className="hero-body">
                        <h1 className="title">Hello!</h1>
                        <h2 className="subtitle">Fellow robot builder.</h2>
                        <p>Below is the readme.md for easy reading.</p>
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