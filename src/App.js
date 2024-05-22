import profilePicture from './img/profile-thumbnail.png';
import './App.css';

function App() {
  return (
    <div className="App font-notoSans w-full h-full flex flex-col items-center ">
      <section className='w-96 h-auto my-52 p-6 sm: w-80 bg-white rounded-xl'>
        <section className='flex'>
          <img className='w-14 h-14 mr-4' src={profilePicture} alt="profile avatar" />
          <section>
            <h1 className='text-lg font-semibold'>Sarah Dole</h1>
            <p className='text-sm text-secondaryColor'>@sarahdole</p>
          </section>
        </section>
        <p className='mt-4 text-secondaryColor'>I've been searching for high-quality abstract images for my design projects, 
      and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!</p>
      </section>

      <div class="absolute bottom-14 text-center" data-gfe-screenshot-exclude="true">
      A challenge by
      <a href="https://www.greatfrontend.com/projects?ref=challenges" target="_blank" rel="noreferrer"> GreatFrontEnd Projects</a>. Built by
      <a
        href="https://www.greatfrontend.com/projects/u/username"
        target="_blank" rel="noreferrer"
        > Amelia D</a>.
    </div>
    </div>
  );
}

export default App;
