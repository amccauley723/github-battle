var React = require('react');
var ReactDom = require('react-dom');

const userData = {
    userName: 'DrewMac',
    fullName: 'Andrew McCauley',
    photoSrc: "https://upload.wikimedia.org/wikipedia/en/9/9b/Rickastleyposter.jpg"
};

class ProfileInformationContainer extends React.Component {
    render() {
        return (
            <div>
                <UserProfilePhoto pictureSrc={this.props.userData.photoSrc} />
                <UserFullName details={this.props.userData} />
                <UserName details={this.props.userData} />
            </div>
        )
    }
}

class UserProfilePhoto extends React.Component {
    render() {
        return (
            <img className="img-thumbnail" src={this.props.pictureSrc} />
        )
    }
}

class UserFullName extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.details.fullName}</p>
            </div>
        )
    }
}

class UserName extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.details.userName}</p>
            </div>
        )
    }
}

ReactDom.render(<ProfileInformationContainer userData={userData}/>, document.getElementById('app'));