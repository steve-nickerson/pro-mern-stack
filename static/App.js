const contentNode = document.getElementById('contents');

const issues = [{
    id: 1, status: 'Open', owner: 'Ravan',
    created: new Date('2018-09-03'), effort: 5,
    completionDate: undefined,
    title: 'Error in console when clicking Add'
}, {
    id: 2, status: 'Assigned', owner: 'Eddie',
    created: new Date('2018-09-04'), effort: 14,
    completionDate: new Date('2018-09-30'),
    title: 'Missing bottom border on panel'
}];

class BorderWrap extends React.Component {
    render() {
        const borderedStyle = { border: "1px solid silver", padding: 6 };

        return React.createElement(
            'div',
            { style: borderedStyle },
            this.props.children
        );
    }
}

class IssueFilter extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'This is a placeholder for the Issue Filter.'
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        return React.createElement(
            'tr',
            null,
            React.createElement(
                'td',
                null,
                issue.id
            ),
            React.createElement(
                'td',
                null,
                issue.status
            ),
            React.createElement(
                'td',
                null,
                issue.owner
            ),
            React.createElement(
                'td',
                null,
                issue.created.toDateString()
            ),
            React.createElement(
                'td',
                null,
                issue.effort
            ),
            React.createElement(
                'td',
                null,
                issue.completionDate ? issue.completionDate.toDateString() : ''
            ),
            React.createElement(
                'td',
                null,
                issue.title
            )
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => React.createElement(IssueRow, { key: issue.id, issue: issue }));

        return React.createElement(
            'table',
            { className: 'bordered-table' },
            React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'th',
                        null,
                        'Id'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Status'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Owner'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Created'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Effort'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Completion Date'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Title'
                    )
                )
            ),
            React.createElement(
                'tbody',
                null,
                issueRows
            )
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'This is a placeholder for the Issue Add.'
        );
    }
}

class IssueList extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Issue Tracker'
            ),
            React.createElement('hr', null),
            React.createElement(IssueTable, { issues: issues }),
            React.createElement('hr', null),
            React.createElement(IssueAdd, null)
        );
    }
}

ReactDOM.render(React.createElement(IssueList, null), contentNode);