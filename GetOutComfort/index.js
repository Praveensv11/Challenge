document.addEventListener('DOMContentLoaded', () => {
    // Create count if not there and store in a local variable
    if (!localStorage.getItem('count')) {
        localStorage.setItem('count', 0);
    }

    const Challenges = [
        "Strike up a conversation with a stranger.",
        "Attend a social event or networking gathering alone.",
        "Volunteer for a public speaking opportunity.",
        "Join a club or group with a new hobby or interest.",
        "Initiate a conversation with someone you admire.",
        "Organize a social event or gathering for friends.",
        "Attend a cultural or community event of a different culture.",
        "Try speed dating or a similar social event.",
        "Speak up in a meeting or group discussion.",
        "Take a solo trip to a new place.",
        "Take a cold shower every day for a week.",
        "Try a new workout or fitness class.",
        "Participate in a local charity run or walk.",
        "Conquer a physical fear like skydiving or bungee jumping.",
        "Learn a new physical skill, like dancing or martial arts.",
        "Go camping in the wilderness for a weekend.",
        "Climb a mountain or hike a challenging trail.",
        "Commit to a daily exercise routine for a month.",
        "Try a new, exotic food.",
        "Take a yoga or meditation class.",
        "Learn a new language.",
        "Read a book on a topic you know nothing about.",
        "Solve a challenging puzzle or brainteaser.",
        "Take up a new hobby or craft, like painting or coding.",
        "Start a blog or vlog on a topic you're passionate about.",
        "Enroll in an online course outside your field of expertise.",
        "Volunteer for a cause you know little about.",
        "Speak up in a meeting or group discussion.",
        "Take a solo trip to a new place.",
        "Apply for a job or internship outside your field.",
        "Ask for a promotion or raise at work.",
        "Switch careers or start your own business.",
        "Mentor or coach someone in your area of expertise.",
        "Attend a networking event in a different industry.",
        "Present a new idea at your workplace.",
        "Request feedback from colleagues and supervisors.",
        "Take on a leadership role in a project.",
        "Attend a conference or workshop in your field.",
        "Write a book or create a professional portfolio.",
        "Create a strict budget and stick to it for a month.",
        "Invest in stocks or a retirement fund.",
        "Start a side hustle or small business.",
        "Negotiate a better deal or price for a service.",
        "Save a specific amount of money by a deadline.",
        "Try living with fewer possessions for a month.",
        "Donate a significant amount to a charity.",
        "Learn about personal finance and investments.",
        "Barter or trade instead of buying something.",
        "Get a part-time job outside your regular field.",
        "Travel to a foreign country with a different language.",
        "Backpack or travel without a detailed plan.",
        "Explore a place known for its cultural differences.",
        "Live with a local family or host for a week.",
        "Visit a destination with extreme weather conditions.",
        "Go on a solo road trip or travel adventure.",
        "Travel sustainably and reduce your carbon footprint.",
        "Visit a place with a completely different cuisine.",
        "Participate in a cultural exchange program.",
        "Go camping in a remote and wild location.",
        "Write a short story or poem and share it.",
        "Create a piece of art or sculpture.",
        "Start a YouTube channel or podcast.",
        "Learn to play a musical instrument.",
        "Write a song and perform it in public.",
        "Experiment with a different style of clothing.",
        "Invent something or come up with a new idea.",
        "Collaborate with someone from a different field.",
        "Take up a craft or DIY project.",
        "Participate in a creative competition.",
        "Practice active listening in conversations.",
        "Speak in front of a large audience.",
        "Present your ideas in a TED-style talk.",
        "Engage in a debate with someone who disagrees.",
        "Write a letter to your future self.",
        "Start a podcast or vlog discussing important topics.",
        "Interview someone you admire.",
        "Participate in a storytelling event.",
        "Attend a speed networking event.",
        "Write and perform a stand-up comedy routine.",
        "Take a spontaneous day trip to an unfamiliar place.",
        "Try a new type of cuisine or cooking style.",
        "Attend a cultural event or festival of a different culture.",
        "Try a new form of dance or exercise.",
        "Engage in a random act of kindness.",
        "Take up a challenge you previously feared.",
        "Learn a new form of art or artistic expression.",
        "Explore a new spiritual or belief system.",
        "Challenge a limiting belief or assumption.",
        "Create your own unique challenge or adventure.",
        "Strike up a conversation with a stranger in a different language.",
  "Attend an open mic night and perform something, even if you're not a performer.",
  "Join a debate club and engage in structured debates.",
  "Visit an art gallery or museum and try to appreciate art you don't understand.",
  "Take up geocaching or orienteering to explore your surroundings.",
  "Participate in a local theater production, even if it's a small role.",
  "Take a scenic train or bus ride to a new destination.",
  "Explore a nearby town or city you've never been to.",
  "Try rock climbing or indoor bouldering.",
  "Take a dance class that's completely outside your comfort zone.",
  "Volunteer in a role that challenges you, such as disaster relief.",
  "Write a heartfelt letter to someone you've had a disagreement with.",
  "Plan and host a themed party for friends or family.",
  "Attend a stand-up comedy workshop and perform your own routine.",
  "Take a day to explore a national park or natural reserve.",
  "Participate in a beach cleanup or environmental conservation project.",
  "Go on a solo camping trip and disconnect from technology.",
  "Learn a traditional craft from a different culture.",
  "Try your hand at woodworking or carpentry.",
  "Explore your local history by visiting historical sites.",
  "Attend a religious service of a faith different from your own.",
  "Volunteer at a shelter or organization that helps the homeless.",
  "Take part in a charity bike ride or walkathon.",
  "Participate in a mindfulness or meditation retreat.",
  "Commit to a month of daily journaling and self-reflection.",
  "Write a short story and submit it to a writing competition.",
  "Attend a seminar or workshop on a topic you know nothing about.",
  "Take a cooking class focused on a cuisine you're unfamiliar with.",
  "Offer to mentor someone in an area of your expertise.",
  "Try improv comedy and join a local improv group.",
  "Volunteer to read or tell stories to children at a library.",
  "Join a local astronomy club and stargaze with a telescope.",
  "Learn to identify constellations and planets in the night sky.",
  "Sign up for a wildlife tracking or nature observation course.",
  "Take a trapeze or circus skills class.",
  "Visit a spiritual retreat or monastery for a day.",
  "Try your hand at archery or marksmanship.",
  "Explore the world of virtual reality or augmented reality.",
  "Take a scenic hot air balloon ride.",
  "Volunteer as a mentor or tutor for underprivileged youth.",
  "Learn the basics of coding or programming.",
  "Attend a survival skills workshop or course.",
  "Volunteer at a retirement home and listen to residents' stories.",
  "Join a chess club and play against experienced players.",
  "Try indoor skydiving or a vertical wind tunnel.",
  "Sign up for a wilderness first aid or CPR certification course.",
  "Learn to read and interpret different types of maps.",
  "Join a parkour or free-running group.",
  "Attend a historical reenactment event.",
  "Explore the world of virtual reality or augmented reality.",
  "Take a scenic hot air balloon ride.",
  "Volunteer as a mentor or tutor for underprivileged youth.",
  "Learn the basics of coding or programming.",
  "Attend a survival skills workshop or course.",
  "Volunteer at a retirement home and listen to residents' stories.",
  "Join a chess club and play against experienced players.",
  "Try indoor skydiving or a vertical wind tunnel.",
  "Sign up for a wilderness first aid or CPR certification course.",
  "Learn to read and interpret different types of maps.",
  "Join a parkour or free-running group.",
  "Attend a historical reenactment event."
      ];

    let count = parseInt(localStorage.getItem('count'));

    // Checking if completeIndex is already present in local storage
    let completeIndex = JSON.parse(localStorage.getItem('completeIndex') || '[]');

    const mainElement = document.querySelector('#main');

    // Set the initial challenge text
    mainElement.innerHTML = "Let's start the challenge";

    document.querySelector('#back').addEventListener('click', () => {
        if(count > 0){
            count--
        }

         // Check if the count reaches the maximum
         if (count >= Challenges.length) {
            count = 0;
        }

        // Save the incremented variable
        localStorage.setItem('count', count);

        // Set the challenge text
        mainElement.innerHTML = Challenges[count];

        // Change the color of the task
        if (completeIndex.includes(count)) {
            mainElement.style.color = 'lightgreen';
        } else {
            document.querySelector('#check').checked = false
            mainElement.style.color = 'white';
        }

        return false;
    })

    document.querySelector('#front').addEventListener('click', (e) => {
        e.preventDefault();

        count++;

        // Check if the count reaches the maximum
        if (count >= Challenges.length) {
            count = 0;
        }

        // Save the incremented variable
        localStorage.setItem('count', count);

        // Set the challenge text
        mainElement.innerHTML = Challenges[count];

        // Change the color of the task
        if (completeIndex.includes(count)) {
            mainElement.style.color = 'lightgreen';
        } else {
            document.querySelector('#check').checked = false
            mainElement.style.color = 'white';
        }

        return false;
    })
    // Change the color of the text to green when the checkbox is clicked
    const check = document.querySelector('#check');
    check.addEventListener('click', () => {
        if (check.checked) {
            completeIndex.push(count);
            mainElement.style.color = 'lightgreen';
        } else {
            const indexToRemove = completeIndex.indexOf(count);
            if (indexToRemove !== -1) {
                completeIndex.splice(indexToRemove, 1);
                mainElement.style.color = 'white';
            }
        }

        // Save the updated completeIndex
        localStorage.setItem('completeIndex', JSON.stringify(completeIndex));
    });
});
