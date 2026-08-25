
import LinkedInButton from './buttons/linkedinButton';
import GithubButton from './buttons/githubButton';

const Footer = () => { 

    return (
        <div className="Footer page-text-animation w-full border-2 border-gray-100 flex items-center justify-center py-6">
            
            <div className="links_container flex gap-10">
                <LinkedInButton></LinkedInButton>
                <GithubButton></GithubButton>
            </div>

        </div>

    );

}

export default Footer;