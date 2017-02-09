var React = require('react');
var ReactDom = require('react-dom');

const userData = {
    userName: 'DrewMac',
    fullName: 'Andrew McCauley',
    photoSrc: "https://upload.wikimedia.org/wikipedia/en/9/9b/Rickastleyposter.jpg",
    profileLink: 'https://github.com/amccauley723'
};

class ProfileInformationContainer extends React.Component {
    render() {
        return (
            <div>
                <UserProfilePhoto pictureSrc={this.props.userData.photoSrc} />
                <UserFullName fullName={this.props.userData.fullName} />
                <UserName userName={this.props.userData.userName} />
                <ProfileLink profileLink={this.props.userData.profileLink} />
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
                <p>{this.props.fullName}</p>
            </div>
        )
    }
}

class UserName extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.userName}</p>
            </div>
        )
    }
}

class ProfileLink extends React.Component {
    render() {
        return (
            <div>
                <Link href="http://google.com">
                    {this.props.profileLink}
                </Link>
            </div>
        )
    }
}

class Link extends React.Component {
    changeURL() {
        window.location.replace(this.props.href)
    }
    render() {
        return (
            <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
                {this.props.children}
            </span>
        )
    }
}

ReactDom.render(<ProfileInformationContainer userData={userData}/>, document.getElementById('app'));