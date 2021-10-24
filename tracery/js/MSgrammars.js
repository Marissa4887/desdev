/**
 * @author Kate 
 * My take on this grammar by Marissa Salas
 */

 var grammars = {
    neverbar : {
        occupationBase : ["Ph.D students", "ninjas"],
        occupation : ["digital media Humanist #occupationBase#", "digital Humanist #occupationBase#", "English #occupationBase#", "digital ethics #occupationBase#","Humanitist #occupationBase#", "digital arts #occupationBase#", "rhetoric #occupationBase#"],
        name : ["Day", "Marissa", "Erica", "Matt", "Courtney", "Corey", "Jonathan", "Katie", "Christina", "Pokey", "Ricardo"],
        characterType : "android velociraptor dragon gorilla sasquatch alien squid cuttlefish".split(" "),
        character : ["#characterType#", "#characterMod# #characterType#"],

        drink : ["macchiato", "cappuccino", "blonde roast", "Americano", "esspresso shot", "flat white", "esspresso", "pumpkin spice latte", "mocha"],
        said : ["hummed", "breathed", "remarked", "grunted", "growled", "babbled", "stammered", "muttered"],
        characterMod : ["cybernetic", "robotic", "anthropomorphic"],
        temp : ["balmy", "summery", "tropical", "boiling", "boiling hot", "blazing","hot","baking","scorching","roasting","searing", "flaming","parching","blistering","ovenlike","sweltering","torrid","sultry","humid","muggy"],
        cdrink : ["whole milk","skim milk","low-fat milk","soy milk","quinoa milk","oat milk","almond milk"],
        says : ["whispers","continues","rustles","murmurs","sighs","moans","soughs","whooshes","whirs","swishes","blows","breathes","susurrates","howls","says"],
        word : ["fertile","fruitful","rich","fecund","high-yielding","productive"],
        says2 : ["responds", "answers","returns","replies","reacts","retorts","acknowledges"],
        word2 : ["suspicious","doubtful","unsure","dubious","wary","chary","skeptical","distrustful","mistrustful","disbelieving","reserved","apprehensive", "cynical"],
        word3 : ["suspiciously","doubtfully","dubiously","warily","charily","skeptically","distrustfully","mistrustfully","disbelievingly","reservedly","apprehensively", "cynically"],
        tword : ["poetry","photography","art","sessions","testing"],
        motto : ["Research Runs on Coffee","Ride'em, Cowboy!", "A Lemon", "A Piece of Cake", "A Cat Nap", "Fish Out Of Water"],
        word4 : ["positive","negative","neutral"],
        word5 : ["increased","decreased","had no change on"],
        bpart : ["shoulder","eye","tongue","fingernail","breast","toes","tooth"],
        word6 : ["tedious","dull","monotonous","repetitious","repetitive","unrelieved","unvaried","absorbing","engrossing","fascinating","riveting","gripping","compelling","captivating","engaging","enthralling"],
        
        locationAdj : ["murkily lit", "cramped", "overcrowded", "brightly lit", "crowded", "smoke-filled"],
        locationBase : ["Colburn", "SVAD", "UCF Union", "CMB downtown", "UCF bookstore"],

        titleNoun : ["pining", "night", "awakening", "surrender", "obsession", "vision", "proposition", "game", "promise", "arrangement", "treasure", "dream", "embrace", "struggle", "pleasure", "discovery", "wish", "need"],
        titleAdj : ["dark", "light", "leather", "rough", "punishing", "burly", "country", "neon", "big-city", "whiskey", "shattered", "broken", "breathless", "tangled", "complicated", "captured", "priceless", "bound", "sinful", "forgotten", "forbidden", "gothic", "interstellar"],
        title : ["#titleAdj.a# #titleNoun#", "#titleAdj# #titleNoun.s#", "#mcName#'s #titleNoun#"],
       
        response:[" <p>#scName# #says2#, I think it was hospitality and social sciences cluster that has partnered with Foxbucks. They got money for every class to get a Foxbucks and the baristas all get training and college credit. A #word2# #scName# continues, I think that they may be doing some #tword# on us as well?  #mcName# #says2#, what do you mean? #scName# #says#, Well I heard the chemistry department talking about addictive sweeteners that have a very #word4# side effect. It has #word5# the amount of research hours throughout the university. #mcName# says Wow! that is very #word6#. That explains all the new students. <p>They have been asking a lot of questions. #scName# #word3# says, well I did get a new Qualtrics survey in my email asking for us to vote on their new motto, #motto#, to go with their mascot the coffee loving #characterType#. #mcName# says looking over their #bpart# #word3#, and #says#, I did see a lot of unmarked black vans with a 'Bird Scooter Pickup' sign around campus and they never picked up a scooter. Yeah, they never do, #scName# #word3# #says# back. #mcName# sips the remaining dregs of their coffee; Ah I think I’ll have another one of these #drink#s. <p>"],

        
        entry : ["...<p>#mcName# walked into the #locationAdj# History and Theory of Digital Media class and coffee bar, Foxbucks.The students gathered around the monitor and waited for the next speaker. The steaming of #temp.a# frothy #cdrink# #drink# over at Foxbucks fills the room. #mcName# sipping their coffee #says# to #scName#, don’t you think that UCF is taking this cluster thing too far. Some department got a research grant, to investigate if we’d be more #word# if the coffee bar was located in every classroom. It wasn't just to make us better #occupation#."],
        plot : ["<h2>#title.capitalizeAll#</h2><p>#entry#<p>#response#"],
        origin : "#[place:#locationBase#][mcType:#character#][scType:#character#][mcName:#name#][scName:#name#]plot#",

    },


    poem : {
        
        occupationBase : ["Ph.D students", "ninjas"],
        occupation : ["digital media Humanist #occupationBase#", "digital Humanist #occupationBase#", "English #occupationBase#", "digital ethics #occupationBase#","Humanitist #occupationBase#", "digital arts #occupationBase#", "rhetoric #occupationBase#"],
        name : ["Day", "Marissa", "Erica", "Matt", "Courtney", "Corey", "Jonathan", "Katie", "Christina", "Pokey", "Ricardo"],
        characterType : "android velociraptor dragon gorilla sasquatch alien squid cuttlefish".split(" "),
        character : ["#characterType#", "#characterMod# #characterType#"],

        drink : ["macchiato", "cappuccino", "blonde roast", "Americano", "esspresso shot", "flat white", "esspresso", "pumpkin spice latte", "mocha"],
        said : ["hummed", "breathed", "remarked", "grunted", "growled", "babbled", "stammered", "muttered"],
        characterMod : ["cybernetic", "robotic", "anthropomorphic"],
        temp : ["balmy", "summery", "tropical", "boiling", "boiling hot", "blazing","hot","baking","scorching","roasting","searing", "flaming","parching","blistering","ovenlike","sweltering","torrid","sultry","humid","muggy"],
        cdrink : ["whole milk","skim milk","low-fat milk","soy milk","quinoa milk","oat milk","almond milk"],
        says : ["whispers","continues","rustles","murmurs","sighs","moans","soughs","whooshes","whirs","swishes","blows","breathes","susurrates","howls","says"],
        word : ["fertile","fruitful","rich","fecund","high-yielding","productive"],
        says2 : ["responds", "answers","returns","replies","reacts","retorts","acknowledges"],
        word2 : ["suspicious","doubtful","unsure","dubious","wary","chary","skeptical","distrustful","mistrustful","disbelieving","reserved","apprehensive", "cynical"],
        word3 : ["suspiciously","doubtfully","dubiously","warily","charily","skeptically","distrustfully","mistrustfully","disbelievingly","reservedly","apprehensively", "cynically"],
        tword : ["poetry","photography","art","sessions","testing"],
        motto : ["Research Runs on Coffee","Ride'em, Cowboy!", "A Lemon", "A Piece of Cake", "A Cat Nap", "Fish Out Of Water"],
        word4 : ["positive","negative","neutral"],
        word5 : ["increased","decreased","had no change on"],
        bpart : ["shoulder","eye","tongue","fingernail","breast","toes","tooth"],
        word6 : ["tedious","dull","monotonous","repetitious","repetitive","unrelieved","unvaried","absorbing","engrossing","fascinating","riveting","gripping","compelling","captivating","engaging","enthralling"],
        
        locationAdj : ["murkily lit", "cramped", "overcrowded", "brightly lit", "crowded", "smoke-filled"],
        locationBase : ["Colburn", "SVAD", "UCF Union", "CMB downtown", "UCF bookstore"],

        titleNoun : ["pining", "night", "awakening", "surrender", "obsession", "vision", "proposition", "game", "promise", "arrangement", "treasure", "dream", "embrace", "struggle", "pleasure", "discovery", "wish", "need"],
        titleAdj : ["dark", "light", "leather", "rough", "punishing", "burly", "country", "neon", "big-city", "whiskey", "shattered", "broken", "breathless", "tangled", "complicated", "captured", "priceless", "bound", "sinful", "forgotten", "forbidden", "gothic", "interstellar"],
        title : ["#titleAdj.a# #titleNoun#", "#titleAdj# #titleNoun.s#", "#mcName#'s #titleNoun#"],
        
        response:[" <p>#scName# #says2#, I think it was hospitality and social sciences cluster that has partnered with Foxbucks. They got money for every class to get a Foxbucks and the baristas all get training and college credit. A #word2# #scName# continues, I think that they may be doing some #tword# on us as well?  #mcName# #says2#, what do you mean? #scName# #says#, Well I heard the chemistry department talking about addictive sweeteners that have a very #word4# side effect. It has #word5# the amount of research hours throughout the university. #mcName# says Wow! that is very #word6#. That explains all the new students. <p>They have been asking a lot of questions. #scName# #word3# says, well I did get a new Qualtrics survey in my email asking for us to vote on their new motto, #motto#, to go with their mascot the coffee loving #characterType#. #mcName# says looking over their #bpart# #word3#, and #says#, I did see a lot of unmarked black vans with a 'Bird Scooter Pickup' sign around campus and they never picked up a scooter. Yeah, they never do, #scName# #word3# #says# back. #mcName# sips the remaining dregs of their coffee; Ah I think I’ll have another one of these #drink#s. <p>"],

        
        entry : ["...<p>#mcName# walked into the #locationAdj# History and Theory of Digital Media class and coffee bar, Foxbucks.The students gathered around the monitor and waited for the next speaker. The steaming of #temp.a# frothy #cdrink# #drink# over at Foxbucks fills the room. #mcName# sipping their coffee #says# to #scName#, don’t you think that UCF is taking this cluster thing too far. Some department got a research grant, to investigate if we’d be more #word# if the coffee bar was located in every classroom. It wasn't just to make us better #occupation#."],
        plot : ["<h2>#title.capitalizeAll#</h2><p>#entry#<p>#response#"],
        origin : "#[place:#locationBase#][mcType:#character#][scType:#character#][mcName:#name#][scName:#name#]plot#",

    },
    
    


}
