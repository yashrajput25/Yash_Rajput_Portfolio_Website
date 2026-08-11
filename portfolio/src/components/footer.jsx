
import LinkedInButton from './buttons/linkedinButton';
import GithubButton from './buttons/githubButton';

const Footer = () => { 

    return (
        <div className="w-full bg-red-50 pl-20 pb-20">
            <div className="buttonContainer flex gap-10 items-center pt-10">
                <LinkedInButton/>
                <GithubButton/>
            </div>
        </div>

    );

}

export default Footer;