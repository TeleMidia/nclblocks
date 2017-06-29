goog.require('Blockly.Blocks')

NclBlocks = {}

// ----------------------------------------
// types
// ----------------------------------------

NclBlocks.types = {
  NODE: 'node',
  MEDIA: 'media',
  MEDIA_SRC: 'media_src',
  INPUT: 'input',
  INPUT_SRC: 'input_src',
  USER: 'user',
  USER_DEVICE: 'user_device',
  LINK: 'link',
  CONDITION: 'condition',
  ACTION: 'action'
}

// ----------------------------------------
// messsages
// ----------------------------------------

NclBlocks.Msg = {}
NclBlocks.Msg.AND = 'e'
NclBlocks.Msg.BODY = 'app'
NclBlocks.Msg.PORT = 'início da app'
NclBlocks.Msg.PORT_LABEL = 'quando iniciar app inicie'
NclBlocks.Msg.MEDIA = 'mídia'
NclBlocks.Msg.SRC = 'conteúdo'
NclBlocks.Msg.MEDIAS = 'mídias'
NclBlocks.Msg.INPUT = 'reconhecedor'
NclBlocks.Msg.INPUTS = 'reconhecedores'
NclBlocks.Msg.VIDEO = 'vídeo'
NclBlocks.Msg.PORTION = 'trecho'
NclBlocks.Msg.ANCHOR_BEGIN = 'tem inicio'
NclBlocks.Msg.ANCHOR_END = 'e fim'
NclBlocks.Msg.VIDEO_ITEM = 'trecho do vídeo'
NclBlocks.Msg.AUDIO = 'áudio'
NclBlocks.Msg.IMAGE = 'imagem'
NclBlocks.Msg.SSML = 'texto para sintetização'
NclBlocks.Msg.SSML_ANCHOR = 'sintetiza frase'
NclBlocks.Msg.SSML_ITEM = 'frase a sintetizar'
NclBlocks.Msg.SRGS = 'descrição de voz'
NclBlocks.Msg.SRGS_ANCHOR = 'reconhece frase'
NclBlocks.Msg.SRGS_ITEM = 'frase a reconhecer'
NclBlocks.Msg.HAND_GESTURE = 'descrição de gestos'
NclBlocks.Msg.HAND_GESTURE_ANCHOR = 'reconhece gesto de mão para'
NclBlocks.Msg.HAND_GESTURE_ITEM = 'gesto a reconhecer'
NclBlocks.Msg.HAND_UP = 'cima'
NclBlocks.Msg.HAND_DOWN = 'baixo'
NclBlocks.Msg.HAND_LEFT = 'esquerda'
NclBlocks.Msg.HAND_RIGHT = 'direita'
NclBlocks.Msg.LINK = 'sincronismo'
NclBlocks.Msg.LINKS = 'sincronismos'
NclBlocks.Msg.WHEN = 'quando'
NclBlocks.Msg.DO = 'faça'
NclBlocks.Msg.USER = 'usuário'
NclBlocks.Msg.USERS = 'usuários'
NclBlocks.Msg.USERCLASS = 'grupo de usuários'
NclBlocks.Msg.MAX_USERS = 'máximo de ususários'
NclBlocks.Msg.DEVICE = 'dispositivo'
NclBlocks.Msg.WITH_DEVICE = 'utilizam dispositivo'
NclBlocks.Msg.DEVICES = 'dispositivos'
NclBlocks.Msg.LEAP = 'sensor de gestos de mão'
NclBlocks.Msg.MICROFONE = 'microfone'
NclBlocks.Msg.CONDITION = 'condição'
NclBlocks.Msg.CONDITION_SIMPLE = 'condição simples'
NclBlocks.Msg.CONDITIONS = 'condições'
NclBlocks.Msg.ONRECOGNIZE = 'reconhecer'
NclBlocks.Msg.ONRECOGNIZE_FROM_USER = 'do usuário'
NclBlocks.Msg.ONBEGIN = 'iniciar'
NclBlocks.Msg.ONEND = 'terminar'
NclBlocks.Msg.ONPAUSE = 'pausar'
NclBlocks.Msg.ONRESUME = 'resumir'
NclBlocks.Msg.ONSELECTION = 'selecionar'
NclBlocks.Msg.COMPOUND_CONDITION_SEQ = 'em sequencia'
NclBlocks.Msg.COMPOUND_CONDITION_AND = 'todos entre'
NclBlocks.Msg.COMPOUND_CONDITION_OR = 'um entre'
NclBlocks.Msg.ACTION = 'ação'
NclBlocks.Msg.ACTIONS = 'ações'
NclBlocks.Msg.START = 'inicie'
NclBlocks.Msg.STOP = 'termine'
NclBlocks.Msg.PAUSE = 'pause'
NclBlocks.Msg.RESUME = 'resuma'
NclBlocks.Msg.SET = 'atribua'
NclBlocks.Msg.SET_TO = 'com valor'

// ----------------------------------------
// icons
// ----------------------------------------

NclBlocks.Icons = {}
NclBlocks.Icons.context = 'media/icon-context.png'
NclBlocks.Icons.media = 'media/icon-media.png'
NclBlocks.Icons.video = 'media/icon-media-video.png'
NclBlocks.Icons.image = 'media/icon-media-image.png'
NclBlocks.Icons.audio = 'media/icon-media-audio.png'
NclBlocks.Icons.input = 'media/icon-recognition.png'
NclBlocks.Icons.ssml = 'media/ssml.png'
NclBlocks.Icons.srgs = 'media/srgs.png'
NclBlocks.Icons.hand_gesture = 'media/hand-gesture.png'
NclBlocks.Icons.port = 'media/icon-link.png'
NclBlocks.Icons.link = 'media/icon-link.png'
NclBlocks.Icons.user = 'media/icon-user-class.png'
NclBlocks.Icons.hand_gesture_sensor = 'media/hand-gesture-sensor.png'
NclBlocks.Icons.microfone = 'media/headset.png'
NclBlocks.Icons.onrecognize = 'media/icon-bind-onselection.png'
NclBlocks.Icons.onbegin = 'media/icon-bind-onbegin.png'
NclBlocks.Icons.onend = 'media/icon-bind-onend.png'
NclBlocks.Icons.onpause = 'media/icon-bind-onpause.png'
NclBlocks.Icons.onresume = 'media/icon-bind-onresume.png'
NclBlocks.Icons.onselection = 'media/icon-bind-onselection.png'
NclBlocks.Icons.start = 'media/icon-bind-start.png'
NclBlocks.Icons.stop = 'media/icon-bind-stop.png'
NclBlocks.Icons.pause = 'media/icon-bind-pause.png'
NclBlocks.Icons.resume = 'media/icon-bind-resume.png'
NclBlocks.Icons.set = 'media/icon-bind-set.png'

// ----------------------------------------
// colours
// ----------------------------------------

NclBlocks.colours = {}
NclBlocks.colours.BODY = 20
NclBlocks.colours.MEDIA = 100
NclBlocks.colours.INPUT = 150
NclBlocks.colours.USER = 40
NclBlocks.colours.LINK = 260
NclBlocks.colours.PORT = 260
NclBlocks.colours.CONDITION = 280
NclBlocks.colours.ACTION = 225

// ----------------------------------------
// default toolbox
// ----------------------------------------

NclBlocks.getDefaultToolboxXML = function (toolboxOptions) {
  var excludeRecognition = !!toolboxOptions.includes('excludeRecognition')
  var excludeResumePauseSet = !!toolboxOptions.includes('excludeResumePauseSet')
  var ret = `<xml id="toolbox" style="display: none">`
  ret += `<category name="` + NclBlocks.Msg.MEDIA + `">`
  ret += `  <block type="media"></block>`
  ret += `  <block type="image"></block>`
  ret += `  <block type="audio"></block>`
  ret += `  <block type="video"></block>`
  ret += `  <block type="ssml"></block>`
  ret += `</category>`
  if (!excludeRecognition) {
    ret += `<category name="` + NclBlocks.Msg.INPUT + `">`
    ret += `  <block type="input"></block>`
    ret += `  <block type="srgs"></block>`
    ret += `  <block type="hand_gesture"></block>`
    ret += `</category>`
    ret += `<category name="` + NclBlocks.Msg.USER + `">`
    ret += `  <block type="user"></block>`
    ret += `  <block type="headset"></block>`
    ret += `  <block type="hand_gesture_sensor"></block>`
    ret += `</category>`
  }
  ret += `<category name="` + NclBlocks.Msg.LINK + `">`
  ret += `  <block type="port"></block>`
  ret += `  <block type="link"></block>`
  ret += `</category>`
  ret += `<category name="` + NclBlocks.Msg.CONDITIONS + `">`
  ret += `  <block type="onbegin"></block>`
  ret += `  <block type="onselection"></block>`
  ret += `  <block type="onend"></block>`
  if (!excludeResumePauseSet) {
    ret += `  <block type="onpause"></block>`
    ret += `  <block type="onresume"></block>`
  }
  if (!excludeRecognition) {
    ret += `  <block type="onrecognize"></block>`
    ret += `  <block type="onrecognizeuser"></block>`
  }
  ret += `  <block type="compoundcondition"></block>`
  ret += `</category>`
  ret += `<category name="` + NclBlocks.Msg.ACTIONS + `">`
  ret += `  <block type="start"></block>`
  ret += `  <block type="stop"></block>`
  if (!excludeResumePauseSet) {
    ret += `  <block type="pause"></block>`
    ret += `  <block type="resume"></block>`
    ret += `  <block type="set"></block>`
  }
  ret += `</category>`
  ret += `</xml>`
  return ret
}
NclBlocks.START_WORKSPACE_WITH_BODY =
  `<xml id="startBlocks" style="display: none">
    <block type="body" inline="false" x="20" y="20"></block>
    </xml>`

// ----------------------------------------
// flags functions
// ----------------------------------------

Blockly.BlockSvg.START_HAT = true
NclBlocks.USE_BODY = false
NclBlocks.USE_CHECK = false

NclBlocks.enableBody = function () {
  Blockly.BlockSvg.START_HAT = false
  NclBlocks.USE_BODY = true
}
NclBlocks.disableBody = function () {
  Blockly.BlockSvg.START_HAT = true
  NclBlocks.USE_BODY = false
}
NclBlocks.enableTypeCheck = function () {
  NclBlocks.USE_CHECK = true
}
NclBlocks.disableTypeCheck = function () {
  NclBlocks.USE_CHECK = false
}

// ----------------------------------------
// xml blocks functions
// ----------------------------------------

NclBlocks.calculateHeight = function (numBlocks, oneBlockHeight) {
  return 20 * (1 + numBlocks) + oneBlockHeight * numBlocks + 'px'
}

NclBlocks.alignTwoColumnsInXML = function (xml) {
  var replaceXY = function (match, p1, p2) {
    var x = p1
    var y = p2
    if (p1 < 300) { // first column
      x = 20
    } else { // second column
      x = 550
    }
    return 'x="' + x + '" y="' + y + '"'
  }
  var xmlAligned = xml.replace(/x="(-?[0-9]*)"\sy="(-?[0-9]*)"/g, replaceXY)
  return xmlAligned
}

NclBlocks.moveLeftBlocksInXML = function (xml) {
  var replaceXY = function (match, p1, p2) {
    var x = p1
    var y = p2
    return 'x="' + (parseInt(x) - 20) + '" y="' + y + '"'
  }
  var xmlAligned = xml.replace(/x="(-?[0-9]*)"\sy="(-?[0-9]*)"/g, replaceXY)
  return xmlAligned
}

NclBlocks.moveRightBlocksInXML = function (xml) {
  var replaceXY = function (match, p1, p2) {
    var x = p1
    var y = p2
    return 'x="' + (parseInt(x) + 20) + '" y="' + y + '"'
  }
  var xmlAligned = xml.replace(/x="(-?[0-9]*)"\sy="(-?[0-9]*)"/g, replaceXY)
  return xmlAligned
}

NclBlocks.moveUpBlocksInXML = function (xml) {
  var replaceXY = function (match, p1, p2) {
    var x = p1
    var y = p2
    return 'x="' + x + '" y="' + (parseInt(y) - 20) + '"'
  }
  var xmlAligned = xml.replace(/x="(-?[0-9]*)"\sy="(-?[0-9]*)"/g, replaceXY)
  return xmlAligned
}

NclBlocks.moveDownBlocksInXML = function (xml) {
  var replaceXY = function (match, p1, p2) {
    var x = p1
    var y = p2
    return 'x="' + x + '" y="' + (parseInt(y) + 20) + '"'
  }
  var xmlAligned = xml.replace(/x="(-?[0-9]*)"\sy="(-?[0-9]*)"/g, replaceXY)
  return xmlAligned
}

// ----------------------------------------
// block inject function
// ----------------------------------------

NclBlocks.injectInDiv = function (pathToBlockly, parendDivId, height,
  workspaceXml = '', isStatic = false, toolboxOptions = []) {
  var injectDivName = 'blockly_' + parendDivId
  var workspace

  Blockly.pathToBlockly = pathToBlockly || './'

  // create div and configure auto resize
  var blocklyArea = document.getElementById(parendDivId)
  var htmlToInsert = '<div id=' + injectDivName +
    " class='center-block' style='height: " + height + ";'></div>"
  blocklyArea.innerHTML += htmlToInsert
  var padding = window.getComputedStyle(blocklyArea, null)
    .getPropertyValue('padding-right')
  var blocklyDiv = document.getElementById(injectDivName)
  var onresize = function (e) {
    var element = blocklyArea
    var x = 0
    var y = 0
    do {
      x += element.offsetLeft
      y += element.offsetTop
      element = element.offsetParent
    } while (element)
    blocklyDiv.style.left = x + 'px'
    blocklyDiv.style.top = y + 'px'
    blocklyDiv.style.width = blocklyArea.offsetWidth - 2 * padding + 'px'
  }
  window.addEventListener('resize', onresize, false)

  // inject
  if (isStatic) {
    workspace = Blockly.inject(injectDivName, {
      media: Blockly.pathToBlockly + 'media/',
      toolbox: false,
      zoom: { controls: false },
      scrollbars: false,
      readOnly: true,
      sounds: true
    })
  } else {
    workspace = Blockly.inject(injectDivName, {
      media: Blockly.pathToBlockly + 'media/',
      toolbox: NclBlocks.getDefaultToolboxXML(toolboxOptions),
      zoom: { controls: true },
      scrollbars: true,
      sounds: true
    })
  }
  if (NclBlocks.USE_BODY) {
    workspaceXml = NclBlocks.START_WORKSPACE_WITH_BODY
  }
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(workspaceXml), workspace)

  onresize()
  Blockly.svgResize(workspace)

  return workspace
}

// ----------------------------------------
// FieldTextButton
// ----------------------------------------

var FieldTextButton = function (inputname, buttontext, changeHandler) {
  FieldTextButton.superClass_.constructor.call(this, inputname)
  this.buttontext_ = buttontext
  this.changeHandler_ = changeHandler
  this.setText(buttontext)
}

goog.inherits(FieldTextButton, Blockly.Field)

FieldTextButton.prototype.clone = function () {
  return new FieldTextButton(this.buttontext_, this.changeHandler_)
}

FieldTextButton.prototype.CURSOR = 'default'

FieldTextButton.prototype.showEditor_ = function () {
  if (this.changeHandler_) {
    this.changeHandler_()
  }
}

// ----------------------------------------
// InputStackMixin
// ----------------------------------------

var InputStackMixin = {
  isInputValue: false,

  pushInput: function () {
    var oldMutationDom = this.mutationToDom()
    var oldMutation = Blockly.Xml.domToText(oldMutationDom)
    var newInput

    // append element
    var newIndex = this.stackSize
    if (this.isInputValue) {
      newInput = this.appendValueInput('element_' + newIndex)
    } else {
      newInput = this.appendDummyInput('element_' + newIndex)
    }
    this.configureNewInput(newInput, newIndex)
    this.moveInputBefore(newInput.name, 'edit')
    this.stackSize++
    // fire mutation event
    var newMutationDom = this.mutationToDom()
    var newMutation = Blockly.Xml.domToText(newMutationDom)
    Blockly.Events.fire(new Blockly.Events.Change(
      this, 'mutation', null, oldMutation, newMutation))

    return newInput
  },

  popInput: function () {
    var oldMutationDom = this.mutationToDom()
    var oldMutation = Blockly.Xml.domToText(oldMutationDom)

    if (this.stackSize <= 0) return
    var rmIndex = this.stackSize - 1
    var inputNameToDelete = 'element_' + rmIndex
    var subStructure = this.getInputTargetBlock(inputNameToDelete)
    if (subStructure) subStructure.outputConnection.disconnect()
    this.removeInput(inputNameToDelete)
    this.stackSize--

    // fire mutation event
    var newMutationDom = this.mutationToDom()
    var newMutation = Blockly.Xml.domToText(newMutationDom)
    Blockly.Events.fire(new Blockly.Events.Change(
      this, 'mutation', null, oldMutation, newMutation))
  },

  mutationToDom: function () {
    var container = document.createElement('mutation')
    container.setAttribute('length', this.stackSize)
    return container
  },

  domToMutation: function (xmlElement) {
    var newLength = xmlElement.getAttribute('length')
    var i
    if (newLength - this.stackSize > 0) {
      for (i = 0; i < newLength - this.stackSize; i++) this.pushInput()
    } else {
      for (i = 0; i < this.stackSize - newLength; i++) this.popInput()
    }
  },

  addMinusPlusDummyInput: function () {
    this.appendDummyInput('edit')
      .appendField(new FieldTextButton('minus', '–', function () {
        this.sourceBlock_.popInput()
      }))
      .appendField(new FieldTextButton('plus', '+', function () {
        this.sourceBlock_.pushInput()
      }))
  }
}

// ----------------------------------------
// NclBlockMixin
// ----------------------------------------

var NclBlockMixin = {
  initShared: function () {
    this.contextMenu = false
    this.setInputsInline(false)
  },
  initAsMedia: function (isSRC = false) {
    this.initShared()
    this.setColour(NclBlocks.colours.MEDIA)
    if (isSRC) {
      this.setOutput(true,
        NclBlocks.USE_CHECK ? NclBlocks.types.MEDIA_SRC : null)
    } else if (NclBlocks.USE_BODY === true) {
      this.setOutput(true, NclBlocks.types.MEDIA)
    }
  },
  initAsInput: function (isSRC = false) {
    this.initShared()
    this.setColour(NclBlocks.colours.INPUT)
    if (isSRC) {
      this.setOutput(true,
        NclBlocks.USE_CHECK ? NclBlocks.types.INPUT_SRC : null)
    } else if (NclBlocks.USE_BODY === true) {
      this.setOutput(true, NclBlocks.types.INPUT)
    }
  },
  initAsUser: function (isSRC = false) {
    this.initShared()
    this.setColour(NclBlocks.colours.USER)
    if (isSRC) {
      this.setOutput(true,
        NclBlocks.USE_CHECK ? NclBlocks.types.USER_SRC : null)
    } else if (NclBlocks.USE_BODY === true) {
      this.setOutput(true, NclBlocks.types.USER)
    }
  },
  initAsLink: function () {
    this.initShared()
    this.setColour(NclBlocks.colours.LINK)
    if (NclBlocks.USE_BODY === true) this.setOutput(true, NclBlocks.types.LINK)
  },
  conditionLikeInit: function () {
    this.initShared()
    this.setColour(NclBlocks.colours.CONDITION)
    this.setOutput(true,
      NclBlocks.USE_CHECK ? NclBlocks.types.CONDITION : null)
  },
  actionLikeInit: function () {
    this.initShared()
    this.setColour(NclBlocks.colours.ACTION)
    this.setPreviousStatement(true, NclBlocks.USE_CHECK
      ? NclBlocks.types.ACTION : null)
    this.setNextStatement(true,
      NclBlocks.USE_CHECK ? NclBlocks.types.ACTION : null)
  }
}

// ----------------------------------------
// createIdArrays function
// ----------------------------------------

var NclIdHandlerMixin = {
  createIdArrays: function () {
    if (this.sourceBlock_ && !this.sourceBlock_.workspace.idArraysFlag) {
      this.sourceBlock_.workspace.idArrayMedia = [['-', '-']]
      this.sourceBlock_.workspace.idArrayInput = [['-', '-']]
      this.sourceBlock_.workspace.idArrayUser = [['-', '-']]
      this.sourceBlock_.workspace.idArraysFlag = true
    }
    if (this.idType === NclBlocks.types.MEDIA) {
      this.idArray = this.sourceBlock_.workspace.idArrayMedia
    } else if (this.idType === NclBlocks.types.INPUT) {
      this.idArray = this.sourceBlock_.workspace.idArrayInput
    } else if (this.idType === NclBlocks.types.USER) {
      this.idArray = this.sourceBlock_.workspace.idArrayUser
    }
  }
}

// ----------------------------------------
// IdFieldDropdown
// ----------------------------------------

/**
 * @constructor
 * @param {string} idType = media | input | user | node
 */

var IdFieldDropdown = function (idType) {
  this.idType = idType
  var menuGenerator = null
  menuGenerator = this.getIdArray
  IdFieldDropdown.superClass_.constructor.call(this, menuGenerator)
}
goog.inherits(IdFieldDropdown, Blockly.FieldDropdown)
Object.assign(IdFieldDropdown.prototype, NclIdHandlerMixin)

IdFieldDropdown.prototype.getIdArray = function () {
  // at toolbox
  if (!this.sourceBlock_) return [['-', '-']]
  // at workspace
  this.createIdArrays()
  if (this.idType === NclBlocks.types.NODE) {
    var medias = this.sourceBlock_.workspace.idArrayMedia
    var inputs = this.sourceBlock_.workspace.idArrayInput
    var ret = medias.concat(inputs).sort()
    if (ret[1][0] === '-') ret.splice(1, 1)
    return ret
  }
  return this.idArray
}

// ----------------------------------------
// IdFieldText
// ----------------------------------------

/**
 * @constructor
 * @param {string} idType = media | input | user
 */

var IdFieldText = function (text, idType) {
  this.idType = idType
  IdFieldText.superClass_.constructor.call(this, text,
    this.validateId)
}
goog.inherits(IdFieldText, Blockly.FieldTextInput)
Object.assign(IdFieldText.prototype, NclIdHandlerMixin)

IdFieldText.prototype.setSourceBlock = function (block) {
  this.workspaceSaved = block.workspace
  this.sourceBlock_ = block
  IdFieldText.superClass_.setSourceBlock.call(block)
}

IdFieldText.prototype.validateId = function (text) {
  if (!text) return text
  // empty or at toolbox
  if (!this.sourceBlock_.workspace) return null
  // at workspace and no idArrayMedia
  this.createIdArrays()
  var i
  if (this.idType === NclBlocks.types.MEDIA ||
    this.idType === NclBlocks.types.INPUT) {
    for (i in this.sourceBlock_.workspace.idArrayMedia) {
      if (this.sourceBlock_.workspace.idArrayMedia[i][0] === text) return null
    }
    for (i in this.sourceBlock_.workspace.idArrayInput) {
      if (this.sourceBlock_.workspace.idArrayInput[i][0] === text) return null
    }
  } else if (this.idType === NclBlocks.types.USER) {
    for (i in this.sourceBlock_.workspace.idArrayUser) {
      if (this.sourceBlock_.workspace.idArrayUser[i][0] === text) return null
    }
  }
  return text
}

IdFieldText.prototype.onFinishEditing_ = function (text) {
  // remove old
  if (this.previous) this.removeId(this.previous)
  // save new
  this.saveId(this.text_)
  this.previous = text
}

IdFieldText.prototype.setValue = function (text) {
  // means set from xml
  if (!this.workspace_ && this.validateId(text)) this.saveId(text)
  if (!this.workspace_) this.previous = text
  Blockly.FieldTextInput.prototype.setValue.call(this, text)
}

IdFieldText.prototype.dispose = function () {
  this.removeId(this.text_)
  Blockly.FieldTextInput.prototype.dispose.call(this)
}

IdFieldText.prototype.saveId = function (text) {
  if (!text) return
  this.createIdArrays()
  this.idArray.push([text, text])
  if (this.idType === NclBlocks.types.USER) {
    var maxUsers = this.sourceBlock_.inputList[1].fieldRow[3].text_
    if (maxUsers) {
      for (var i = 1; i <= maxUsers; i++) {
        this.idArray.push([text + '.' + i, text + '.' + i])
      }
    }
  }
}

IdFieldText.prototype.removeId = function (text) {
  // at toolbox
  if (!text) return
  // at worksapce
  var index = -1
  var i
  for (i in this.idArray) {
    if (this.idArray[i][0] === text) {
      index = i
      break
    }
  }
  if (index > -1) { this.idArray.splice(index, 1) }
  if (this.idType === NclBlocks.types.USER) {
    var maxUsers = this.sourceBlock_.inputList[1].fieldRow[3].text_
    this.idArray.splice(index, 1 + maxUsers)
  }
}

// ----------------------------------------
// UserMaxFieldNumber
// ----------------------------------------

var UserMaxFieldNumber = function (initialValue) {
  this.previous = initialValue || 2
  this.idType = NclBlocks.types.USER
  UserMaxFieldNumber.superClass_.constructor.call(this, initialValue, 2, 10, 1)
}
goog.inherits(UserMaxFieldNumber, Blockly.FieldNumber)
Object.assign(UserMaxFieldNumber.prototype, NclIdHandlerMixin)

UserMaxFieldNumber.prototype.onFinishEditing_ = function (text) {
  this.updateIds(text)
  this.previous = text
}

UserMaxFieldNumber.prototype.setValue = function (text) {
  // means set from xml
  if (!this.workspace_) {
    this.updateIds(text)
    this.previous = text
  }
  Blockly.Field.prototype.setValue.call(this, text)
}

UserMaxFieldNumber.prototype.updateIds = function (text) {
  // at toolbox
  if (!text) return
  if (text === this.previous) return
  if (!this.sourceBlock_) return
  // at workspace
  this.createIdArrays()
  var i
  var diff = text - parseInt(this.previous)
  var userId = this.sourceBlock_.inputList[1].fieldRow[1].text_

  if (diff > 0) {
    if (userId) {
      for (i = parseInt(this.previous) + 1; i <= text; i++) {
        this.idArray.push([userId + '.' + i, userId + '.' + i])
      }
    }
  } else {
    var numDel = Math.abs(diff)
    var index = -1
    for (i in this.idArray) {
      if (this.idArray[i][0] === userId) {
        index = i
        break
      }
    }
    if (index > 0) {
      this.idArray.splice(index + 1 + parseInt(text), numDel)
    }
  }
}

// ----------------------------------------
// body block
// ----------------------------------------

Blockly.Blocks.body = {
  init: function () {
    this.setColour(NclBlocks.colours.BODY)
    this.contextMenu = false
    this.setDeletable(false)

    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = true
    this.configureNewInput = function (newInput, index) {
      newInput.appendField()
        .setCheck(NclBlocks.USE_CHECK
          ? [NclBlocks.types.MEDIA, NclBlocks.types.INPUT, NclBlocks.types.USER,
            NclBlocks.types.LINK]
          : null)
    }
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.context,
        20, 20, '*'))
      .appendField('{' + NclBlocks.Msg.BODY + '}')
    // add edit buttons
    this.addMinusPlusDummyInput()
    // add initial inputs
    for (var i = 0; i < 5; i++) this.pushInput()
  }
}
Object.assign(Blockly.Blocks.body, InputStackMixin)

// ----------------------------------------
// media block
// ----------------------------------------

Blockly.Blocks.media = {
  init: function () {
    this.initAsMedia()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.media, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.MEDIA + '}')
    this.appendValueInput('src')
      .setCheck(NclBlocks.USE_CHECK ? NclBlocks.types.MEDIA_SRC : null)
      .appendField('id')
      .appendField(new IdFieldText('', NclBlocks.types.MEDIA), 'id')
      .appendField('e ' + NclBlocks.Msg.SRC)
    this.setInputsInline(false)
  }
}
Object.assign(Blockly.Blocks.media, NclBlockMixin)

Blockly.Blocks.image = {
  init: function () {
    this.initAsMedia(true)

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.image, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.IMAGE + '}')
  }
}
Object.assign(Blockly.Blocks.image, NclBlockMixin)

Blockly.Blocks.video = {
  init: function () {
    this.initAsMedia(true)

    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = false
    this.configureNewInput = function (newInput, index) {
      newInput.appendField(NclBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', NclBlocks.types.MEDIA), 'id_area' +
          index)
        .appendField(NclBlocks.Msg.ANCHOR_BEGIN)
        .appendField(new Blockly.FieldTextInput(''), 'begin' + index)
        .appendField(NclBlocks.Msg.ANCHOR_END)
        .appendField(new Blockly.FieldTextInput(''), 'end' + index)
    }
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.video, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.VIDEO + '}')
    // add edit buttons
    this.addMinusPlusDummyInput()
    // add one area
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.video, NclBlockMixin)
Object.assign(Blockly.Blocks.video, InputStackMixin)

Blockly.Blocks.audio = {
  init: function () {
    this.initAsMedia(true)

    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = false
    this.configureNewInput = function (newInput, index) {
      newInput.appendField(NclBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', NclBlocks.types.MEDIA), 'id_area' +
          index)
        .appendField(NclBlocks.Msg.ANCHOR_BEGIN)
        .appendField(new Blockly.FieldTextInput(''), 'begin' + index)
        .appendField(NclBlocks.Msg.ANCHOR_END)
        .appendField(new Blockly.FieldTextInput(''), 'end' + index)
    }
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.audio, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.AUDIO + '}')
    // add edit buttons
    this.addMinusPlusDummyInput()
    // add one area
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.audio, NclBlockMixin)
Object.assign(Blockly.Blocks.audio, InputStackMixin)

Blockly.Blocks.ssml = {
  init: function () {
    this.initAsMedia(true)

    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = false
    this.configureNewInput = function (newInput, index) {
      newInput.appendField(NclBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', NclBlocks.types.MEDIA), 'id_area' +
          index)
        .appendField(NclBlocks.Msg.SSML_ANCHOR)
        .appendField(new Blockly.FieldTextInput(''), 'label' + index)
    }
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.ssml, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.SSML + '}')
    this.stackSize++
    // add plus button
    this.addMinusPlusDummyInput()
    // add one area
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.ssml, NclBlockMixin)
Object.assign(Blockly.Blocks.ssml, InputStackMixin)

// ----------------------------------------
// input blocks
// ----------------------------------------

Blockly.Blocks.input = {
  init: function () {
    this.initAsInput(false)

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.input, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.INPUT + '}')
    this.appendValueInput('src')
      .setCheck(NclBlocks.USE_CHECK ? NclBlocks.types.INPUT_SRC : null)
      .appendField('id')
      .appendField(new IdFieldText('', NclBlocks.types.INPUT), 'id')
      .appendField('e ' + NclBlocks.Msg.SRC)
  }
}
Object.assign(Blockly.Blocks.input, NclBlockMixin)

Blockly.Blocks.srgs = {
  init: function () {
    this.initAsInput(true)

    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = false
    this.configureNewInput = function (newInput, index) {
      newInput.appendField(NclBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', NclBlocks.types.INPUT), 'id_area' +
          index)
        .appendField(NclBlocks.Msg.SRGS_ANCHOR)
        .appendField(new Blockly.FieldTextInput(''), 'label' + index)
    }
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.srgs, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.SRGS + '}')
    // add edit buttons
    this.addMinusPlusDummyInput()
    // add one area
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.srgs, NclBlockMixin)
Object.assign(Blockly.Blocks.srgs, InputStackMixin)

Blockly.Blocks.hand_gesture = {
  init: function () {
    this.initAsInput(true)

    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = false
    this.configureNewInput = function (newInput, index) {
      newInput.appendField(NclBlocks.Msg.PORTION)
        .appendField(new IdFieldText('', NclBlocks.types.INPUT), 'id_area' +
          index)
        .appendField(NclBlocks.Msg.HAND_GESTURE_ANCHOR)
        .appendField(new Blockly.FieldDropdown(
          [
            [NclBlocks.Msg.HAND_UP, 'up'],
            [NclBlocks.Msg.HAND_DOWN, 'down'],
            [NclBlocks.Msg.HAND_LEFT, 'left'],
            [NclBlocks.Msg.HAND_RIGHT, 'right']
          ]), 'label' + index)
    }
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.hand_gesture, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.HAND_GESTURE + '}')
    // add edit buttons
    this.addMinusPlusDummyInput()
    // add one area
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.hand_gesture, NclBlockMixin)
Object.assign(Blockly.Blocks.hand_gesture, InputStackMixin)

// ----------------------------------------
// user related blocks
// ----------------------------------------

Blockly.Blocks.user = {
  init: function () {
    this.initAsUser()

    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = true
    this.configureNewInput = function (newInput, index) {
      newInput.appendField(NclBlocks.Msg.WITH_DEVICE)
        .setCheck(NclBlocks.USE_CHECK ? NclBlocks.types.USER_DEVICE : null)
    }
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.user, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.USERCLASS + '}')
    this.appendDummyInput()
      .appendField('id')
      .appendField(new IdFieldText('', NclBlocks.types.USER), 'id')
      .appendField(NclBlocks.Msg.AND)
      // .appendField(new IdFieldText('2'), 'usermax', 'usermax')
      .appendField(new UserMaxFieldNumber(), 'usermax')
      .appendField(NclBlocks.Msg.USERS)
    // add edit buttons
    this.addMinusPlusDummyInput()
    // add one device
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.user, NclBlockMixin)
Object.assign(Blockly.Blocks.user, InputStackMixin)

Blockly.Blocks.headset = {
  init: function () {
    this.initAsUser(true)

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.microfone, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.MICROFONE + '}')
  }
}
Object.assign(Blockly.Blocks.headset, NclBlockMixin)

Blockly.Blocks.hand_gesture_sensor = {
  init: function () {
    this.initAsUser(true)

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.hand_gesture_sensor,
      25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.LEAP + '}')
  }
}
Object.assign(Blockly.Blocks.hand_gesture_sensor, NclBlockMixin)

// ----------------------------------------
// port block
// ----------------------------------------

Blockly.Blocks.port = {
  init: function () {
    this.initAsLink()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.port, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.LINK + '}')
    this.appendDummyInput()
      .appendField(NclBlocks.Msg.PORT_LABEL)
      .appendField(new IdFieldDropdown(NclBlocks.types.NODE), 'id')
  }
}
Object.assign(Blockly.Blocks.port, NclBlockMixin)

// ----------------------------------------
// link block
// ----------------------------------------

Blockly.Blocks.link = {
  init: function () {
    this.initAsLink()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.link, 25, 25, '*'))
      .appendField('{' + NclBlocks.Msg.LINK + '}')
    this.appendValueInput('conditions')
      .setCheck(NclBlocks.USE_CHECK ? NclBlocks.types.CONDITION : null)
      .appendField(NclBlocks.Msg.WHEN)
    this.appendStatementInput('actions')
      .setCheck(NclBlocks.USE_CHECK ? NclBlocks.types.ACTION : null)
      .appendField(NclBlocks.Msg.DO)
  }
}
Object.assign(Blockly.Blocks.link, NclBlockMixin)

// ----------------------------------------
// condition blocks
// ----------------------------------------

Blockly.Blocks.onbegin = {
  init: function () {
    this.conditionLikeInit()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.onbegin, 15,
      15, '*'))
      .appendField(NclBlocks.Msg.ONBEGIN)
      .appendField(new IdFieldDropdown(NclBlocks.types.MEDIA), 'id')
  }
}
Object.assign(Blockly.Blocks.onbegin, NclBlockMixin)

Blockly.Blocks.onend = {
  init: function () {
    this.conditionLikeInit()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.onend, 15, 15, '*'))
      .appendField(NclBlocks.Msg.ONEND)
      .appendField(new IdFieldDropdown(NclBlocks.types.MEDIA), 'id')
  }
}
Object.assign(Blockly.Blocks.onend, NclBlockMixin)

Blockly.Blocks.onpause = {
  init: function () {
    this.conditionLikeInit()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + NclBlocks.Icons.onpause, 15,
        15, '*'))
      .appendField(NclBlocks.Msg.ONPAUSE)
      .appendField(new IdFieldDropdown(NclBlocks.types.MEDIA), 'id')
  }
}
Object.assign(Blockly.Blocks.onpause, NclBlockMixin)

Blockly.Blocks.onresume = {
  init: function () {
    this.conditionLikeInit()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.onresume, 15, 15, '*'))
      .appendField(NclBlocks.Msg.ONRESUME)
      .appendField(new IdFieldDropdown(NclBlocks.types.MEDIA), 'id')
  }
}
Object.assign(Blockly.Blocks.onresume, NclBlockMixin)

Blockly.Blocks.onselection = {
  init: function () {
    this.conditionLikeInit()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.onselection, 15, 15, '*'))
      .appendField(NclBlocks.Msg.ONSELECTION)
      .appendField(new IdFieldDropdown(NclBlocks.types.MEDIA), 'id')
  }
}
Object.assign(Blockly.Blocks.onselection, NclBlockMixin)

Blockly.Blocks.onrecognize = {
  init: function () {
    this.conditionLikeInit()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.onrecognize, 15, 15, '*'))
      .appendField(NclBlocks.Msg.ONRECOGNIZE)
      .appendField(new IdFieldDropdown(NclBlocks.types.INPUT), 'id')
  }
}
Object.assign(Blockly.Blocks.onrecognize, NclBlockMixin)

Blockly.Blocks.onrecognizeuser = {
  init: function () {
    this.conditionLikeInit()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.onrecognize, 15, 15, '*'))
      .appendField(NclBlocks.Msg.ONRECOGNIZE)
      .appendField(new IdFieldDropdown(NclBlocks.types.INPUT), 'id')
      .appendField(NclBlocks.Msg.ONRECOGNIZE_FROM_USER)
      .appendField(new IdFieldDropdown(NclBlocks.types.USER), 'user_id')
  }
}
Object.assign(Blockly.Blocks.onrecognizeuser, NclBlockMixin)

Blockly.Blocks.compoundcondition = {
  init: function () {
    this.conditionLikeInit()

    // InputStackMixin config
    this.stackSize = 0
    this.isInputValue = true
    this.configureNewInput = function (newInput, index) {
      newInput.setCheck(NclBlocks.USE_CHECK ? NclBlocks.types.CONDITION : null)
    }
    // add name
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [NclBlocks.Msg.COMPOUND_CONDITION_SEQ, 'seq'],
        [NclBlocks.Msg.COMPOUND_CONDITION_AND, 'and'],
        [NclBlocks.Msg.COMPOUND_CONDITION_OR, 'or']
      ]), 'operator')
    // add plus button
    this.addMinusPlusDummyInput()
    // add two conditions
    this.pushInput()
    this.pushInput()
  }
}
Object.assign(Blockly.Blocks.compoundcondition, NclBlockMixin)
Object.assign(Blockly.Blocks.compoundcondition, InputStackMixin)

// ----------------------------------------
// actions blocks
// ----------------------------------------

Blockly.Blocks.start = {
  init:
  function () {
    this.actionLikeInit()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.start, 15, 15, '*'))
      .appendField(NclBlocks.Msg.START)
      .appendField(new IdFieldDropdown(NclBlocks.types.NODE), 'id')
  }
}
Object.assign(Blockly.Blocks.start, NclBlockMixin)

Blockly.Blocks.stop = {
  init: function () {
    this.actionLikeInit()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.stop, 15, 15, '*'))
      .appendField(NclBlocks.Msg.STOP)
      .appendField(new IdFieldDropdown(NclBlocks.types.NODE), 'id')
  }
}
Object.assign(Blockly.Blocks.stop, NclBlockMixin)

Blockly.Blocks.pause = {
  init: function () {
    this.actionLikeInit()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.pause, 15, 15, '*'))
      .appendField(NclBlocks.Msg.PAUSE)
      .appendField(new IdFieldDropdown(NclBlocks.types.MEDIA), 'id')
  }
}
Object.assign(Blockly.Blocks.pause, NclBlockMixin)

Blockly.Blocks.resume = {
  init: function () {
    this.actionLikeInit()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.resume, 15, 15, '*'))
      .appendField(NclBlocks.Msg.RESUME)
      .appendField(new IdFieldDropdown(NclBlocks.types.MEDIA), 'id')
  }
}
Object.assign(Blockly.Blocks.resume, NclBlockMixin)

Blockly.Blocks.set = {
  init: function () {
    this.actionLikeInit()

    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
        NclBlocks.Icons.set, 15, 15, '*'))
      .appendField(NclBlocks.Msg.SET)
      .appendField(new IdFieldDropdown(NclBlocks.types.MEDIA), 'id')
      .appendField(NclBlocks.Msg.SET_TO)
      .appendField(new Blockly.FieldTextInput(''), 'value')
  }
}
Object.assign(Blockly.Blocks.set, NclBlockMixin)