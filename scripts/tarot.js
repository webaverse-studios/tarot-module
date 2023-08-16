async function _handleTarotCreatingSkill(event) {
    const sentences = event.value.split(/(?<=\.) /);
    sentences.map(s =>{
        window.hooks.emit('moemate_core:handle_skill_text', {name: event.name, value: s});
    })
    
   

    // const context = {
    //     charactersApiUrl: 'https://character-api-ftaw.onrender.com/api/characters',
    //     charactersAPIKey: '6b5900fa-a760-4814-8a67-c387f8cd5ba5'
    // }

    setTimeout(async () => {
        await window.companion.WaitForTurn(async () => { // force the companion to not talk
            
            window.companion.Stop(true);
            window.hooks.emit('card-selector:activate');

            // const model = window.models.CreateModel('characters:getCharactersApi')
            // window.models.ApplyContextObject(model, context);
            // await window.models.CallModel(model);
            // window.models.DestroyModel(model);
        });
    }, 5000);

    
}

// async function _handleCharacterApiResponse(e) {
//     // console.log('got api reply')
//     window.hooks.emit('card-selector:activate', e.response.characters);
// }

async function initiateLlm() {
    window.hooks.emitSync("character:reset"); // resets the abort controllers
    window.hooks.emitSync("character:processing");

    try {
      let llm = window.companion.GetCharacterAttribute('llmModel');
      if (!llm) llm = 'Claude v2'
      window.models.CreateModel(llm);
    } catch (error) {
      logger.error(error);
    }
}

async function _handleCardSelectorFinish(data) {
    await initiateLlm();

    const name = window.companion.GetCharacterAttribute('name');
    window.hooks.emit('moemate_core:handle_skill_text', {name: '@user', value: 'The selected card is: ' + data.cardName});
    window.companion.SendMessage({ type: "WEB_IMAGE", user: name, value: data.cardImage, timestamp: Date.now()});
    window.hooks.emit('moemate_core:handle_skill_text', {name: name, value: 'What specific question would you like to explore through the Tarot cards today?'});
    setTimeout(async () => {
        await window.companion.WaitForTurn(async () => { // force the companion to not talk
            window.companion.Stop(true);
        });
    }, 1000);
}

async function _handleTarotReadingSkill(e) {
    const sentences = e.value.split(/(?<=\.) /);
    sentences.map(s =>{
        window.hooks.emit('moemate_core:handle_skill_text', {name: e.name, value: s});
    })
    setTimeout(async () => {
        await window.companion.WaitForTurn(async () => { // force the companion to not talk
            window.companion.Stop(true);
        });
    }, 1000);
}

export function init() {
    console.log('tarot module!!!!!')

    window.components.AddComponentToScreen('companion', 'CardSelector');

    window.hooks.on('tarot_card:handle_create_tarot_cards', _handleTarotCreatingSkill)
    window.hooks.on('tarot_card:handle_read_tarot_cards', _handleTarotReadingSkill)

    // window.hooks.on('models:response:characters:getCharactersApi', _handleCharacterApiResponse)

    window.hooks.on('card-selector:finish', _handleCardSelectorFinish)
   
}