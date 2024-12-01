

// Dynamic filling LearnMore form according to the tour name

document.getElementById('learn_more_option1').addEventListener('click', () => {
  tour_description.innerHTML = `<h2 class="text-center">Dubai Tour Package</h2>
              
                <div class="mt-4">
                  <h5 >What’s Included in the Tour:</h5>
                  <ul>
                    <li><strong>Accommodation:</strong> 
                      <p>5-star hotel stay for 5 nights in the heart of Dubai. Breakfast included.</p>
                    </li>
                    <li><strong>Airport Transfers:</strong> 
                      <p>Private airport pick-up and drop-off services.</p>
                    </li>
                    <li><strong>City Tour:</strong> 
                      <p>Guided tour of iconic attractions, including Burj Khalifa, Dubai Marina, and Palm Jumeirah.</p>
                    </li>
                    <li><strong>Desert Safari:</strong> 
                      <p>Thrilling dune bashing experience, camel rides, traditional Bedouin camp visit, and BBQ dinner.</p>
                    </li>
                    <li><strong>Dubai Creek Cruise:</strong> 
                      <p>Evening dhow cruise with dinner and entertainment.</p>
                    </li>
                    <li><strong>Shopping Tour:</strong> 
                      <p>Visit to the famous Dubai Mall and Souks for a unique shopping experience.</p>
                    </li>
                    <li><strong>Cultural Experiences:</strong> 
                      <p>Entry to the Dubai Museum and a guided exploration of the Al Fahidi Historical District.</p>
                    </li>
                    <li><strong>Adventure Add-ons (Optional):</strong> 
                      <p>Skydiving over the Palm Jumeirah or a helicopter ride over the city.</p>
                    </li>
                    <li><strong>Visa Assistance:</strong> 
                      <p>Help with tourist visa arrangements (if applicable).</p>
                    </li>
                    <li><strong>24/7 Support:</strong> 
                      <p>Local assistance and tour guide availability.</p>
                    </li>
                  </ul>
                </div>
              
              
  `

  footer_description.innerHTML = `
     <div class="col-12 px-3">
                  <h5>Tour Price:</h5>
                  <p>
                    <strong>Starting at $1,800 per person</strong>  
                    <p>
                    *Price may vary depending on season, hotel preference, and optional add-ons.
                    </p>
                  </p>
      </div>
               
  `

  


});

document.getElementById('learn_more_option2').addEventListener('click', () => {
  
  tour_description.innerHTML = `
    <h2 class="text-center">Paris Tour Package</h2>
    <div class="mt-4">
      <h5>What’s Included in the Tour:</h5>
      <ul>
        <li><strong>Accommodation:</strong> <p>Charming boutique hotel in the city center for 5 nights with breakfast.</p></li>
        <li><strong>Airport Transfers:</strong> <p>Private airport pick-up and drop-off service.</p></li>
        <li><strong>City Tour:</strong> <p>Guided tour of Parisian landmarks, including the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.</p></li>
        <li><strong>Seine River Cruise:</strong> <p>Evening cruise with dinner, offering stunning views of illuminated Paris.</p></li>
        <li><strong>Cultural Excursions:</strong> <p>Entry to the Musée d'Orsay and Montmartre district tour with a local guide.</p></li>
        <li><strong>Shopping Experience:</strong> <p>Visit to Galeries Lafayette and Le Marais district for luxury and local fashion.</p></li>
        <li><strong>Culinary Delights:</strong> <p>Traditional French dinner at a Michelin-starred restaurant.</p></li>
        <li><strong>Optional Experiences:</strong> <p>A day trip to Versailles or Champagne wine region.</p></li>
      </ul>
    </div>
   
  `

  footer_description.innerHTML = `
     <div class="col-12 px-3">
      <h5>Tour Price:</h5>
      <p><strong>Starting at $2,200 per person</strong>
      <p style = "font-weight: 300;"> *Price depends on hotel category and optional activities.</p>
      </p>
    </div>
  `


});

document.getElementById('learn_more_option3').addEventListener('click', () => {
  tour_description.innerHTML =`
     <h2 class="text-center">Rome Tour Package</h2>
    <div class="mt-4">
      <h5>What’s Included in the Tour:</h5>
      <ul>
        <li><strong>Accommodation:</strong> <p>Stay in a 4-star hotel near historic landmarks for 5 nights, with breakfast included.</p></li>
        <li><strong>Airport Transfers:</strong> <p>Private transfers to and from the airport.</p></li>
        <li><strong>Guided City Tour:</strong> <p>Visits to the Colosseum, Roman Forum, and Palatine Hill.</p></li>
        <li><strong>Vatican City Tour:</strong> <p>Exclusive access to St. Peter's Basilica, Vatican Museums, and the Sistine Chapel.</p></li>
        <li><strong>Food & Wine Tasting:</strong> <p>A culinary tour in Trastevere with authentic Roman dishes and wines.</p></li>
        <li><strong>Cultural Walks:</strong> <p>Explore Piazza Navona, the Pantheon, and Trevi Fountain with a knowledgeable guide.</p></li>
        <li><strong>Optional Excursions:</strong> <p>A day trip to Pompeii or the Amalfi Coast.</p></li>
      </ul>
    </div>
    
  `


  
  footer_description.innerHTML = `
    <div class="col-12 px-3">
      <h5>Tour Price:</h5>
      <p><strong>Starting at $1,900 per person</strong>
      <p >*Customizable with additional options.</p>
      </p>
    </div>
  `


});

document.getElementById('learn_more_option4').addEventListener('click', () => {
  tour_description.innerHTML = `
    <h2 class="text-center">Cairo Tour Package</h2>
    <div class="mt-4">
      <h5>What’s Included in the Tour:</h5>
      <ul>
        <li><strong>Accommodation:</strong><p>5 nights in a luxury hotel overlooking the Nile River, with daily breakfast.</p></li>
        <li><strong>Airport Transfers:</strong><p>Private transfer service to and from the airport.</p></li>
        <li><strong>Historical Tour:</strong><p>Explore the Great Pyramids of Giza, Sphinx, and Saqqara.</p></li>
        <li><strong>Museum Visits:</strong><p>Entry to the Egyptian Museum, showcasing treasures of ancient Egypt.</p></li>
        <li><strong>Nile Cruise:</strong><p>A dinner cruise with traditional Egyptian entertainment.</p></li>
        <li><strong>Cultural Experiences:</strong><p>Visit Khan El Khalili Bazaar for shopping and Al-Azhar Mosque for history.</p></li>
        <li><strong>Desert Adventure:</strong><p>Optional quad biking or camel riding near the Pyramids.</p></li>
      </ul>
    </div>
    
  `

  footer_description.innerHTML = `
  <div class="mt-4">
      <h5>Tour Price:</h5>
      <p><strong>Starting at $1,700 per person</strong>
      <p>*Price varies based on room category and optional activities.</p>
      </p>
    </div>
`


});
document.getElementById('learn_more_option5').addEventListener('click', () => {
  tour_description.innerHTML = `
     <h2 class="text-center">New York Tour Package</h2>
    <div class="mt-4">
      <h5>What’s Included in the Tour:</h5>
      <ul>
        <li><strong>Accommodation:</strong><p>4-star hotel in Manhattan for 5 nights, with breakfast included.</p></li>
        <li><strong>Airport Transfers:</strong><p>Private pick-up and drop-off services.</p></li>
        <li><strong>City Sightseeing:</strong><p>Guided tours of Central Park, Times Square, and the Empire State Building.</p></li>
        <li><strong>Statue of Liberty & Ellis Island:</strong><p>Ferry ride and guided exploration of these iconic landmarks.</p></li>
        <li><strong>Broadway Experience:</strong><p>Tickets to a Broadway show of your choice.</p></li>
        <li><strong>Cultural Highlights:</strong><p>Entry to the Metropolitan Museum of Art and 9/11 Memorial Museum.</p></li>
        <li><strong>Shopping Tour:</strong><p>Visit Fifth Avenue and Soho for an unforgettable shopping spree.</p></li>
        <li><strong>Optional Adventures:</strong><p>Helicopter ride over Manhattan or a day trip to Niagara Falls.</p></li>
      </ul>
    </div>
    
  `
  footer_description.innerHTML = `
  <div class="col-12 px-3">
      <h5>Tour Price:</h5>
      <p><strong>Starting at $2,500 per person</strong>
      <p>*Price depends on selected activities.</p>
      </p>
  </div>
`

});
document.getElementById('learn_more_option6').addEventListener('click', () => {
  tour_description.innerHTML = `
     <h2 class="text-center">Tokyo Tour Package</h2>
    <div class="mt-4">
      <h5>What’s Included in the Tour:</h5>
      <ul>
        <li><strong>Accommodation:</strong> <p>Stay in a luxury hotel in Shinjuku or Ginza for 5 nights, with daily breakfast.</p></li>
        <li><strong>Airport Transfers:</strong> <p>Private or shared transfer options available.</p></li>
        <li><strong>Cultural Exploration:</strong> <p>Guided tours of Asakusa, Meiji Shrine, and the Imperial Palace.</p></li>
        <li><strong>Food Tour:</strong> <p>Experience authentic Japanese cuisine with a guided sushi-making workshop and ramen tasting.</p></li>
        <li><strong>City Highlights:</strong> <p>Visit Tokyo Skytree, Shibuya Crossing, and Akihabara.</p></li>
        <li><strong>Day Trips:</strong> <p>Optional excursions to Mount Fuji or the hot springs of Hakone.</p></li>
        <li><strong>Shopping Experience:</strong> <p>Explore Ginza for luxury brands and Harajuku for trendy fashion.</p></li>
        <li><strong>Nightlife:</strong> <p>Enjoy a sake tasting tour and karaoke night in Shinjuku.</p></li>
      </ul>
    </div>
   
  </div>
  `
  footer_description.innerHTML = `
   <div class="col-12 px-3">
      <h5>Tour Price:</h5>
      <p><strong >Starting at $2,300 per person</strong>
      <p>*Price varies based on season and optional tours.</p>
      </p>
    </div>
`

});














