export default {
  imageGeneration: {
    title: 'Online Image Generation',
    description: 'Generate images with an API key that has image access, then preview or download them in the browser.',
    controls: {
      apiKey: 'API Key', createImageApiKey: 'Create image API key', refreshKeys: 'Refresh keys', modelSelection: 'Model selection', count: 'Count',
      imageSize: 'Size', quality: 'Quality', responseFormat: 'Response format', prompt: 'Prompt',
      referenceImages: 'Reference images', clearReferenceImages: 'Clear reference images',
      removeReferenceImage: 'Remove reference image', referenceImagesDrop: 'Drop reference images here, or click to choose files',
      chooseReferenceImages: 'Choose images', imageTutorial: 'Image tutorial', generate: 'Generate', generating: 'Generating',
    },
    hints: {
      apiKey: 'Only active keys whose groups allow image generation are shown.',
      modelsLoading: 'Loading models available to this key…',
      modelsEmpty: 'This key returned no available models. Refresh the key or check its group model configuration.',
      responseFormat: 'Base64 makes it easier to save results directly in the browser.',
      referenceImages: 'Optional PNG, JPG, or WEBP files; 20MB each, up to four. Adding files switches to image editing.',
      referenceImagesSelected: '{count} reference image(s) selected.',
      imageTutorialUnavailable: 'The administrator has not added the Image Tutorial custom page.',
    },
    results: {
      title: 'Results', empty: 'No images yet', emptyHint: 'Enter a prompt and start generating.',
      revisedPrompt: 'Revised prompt', download: 'Download', open: 'Open',
    },
    history: {
      title: 'History', hint: 'History stays in this browser and can be downloaded at any time.', clear: 'Clear history',
      clearConfirm: 'Clear image history stored in this browser?', empty: 'No history yet',
      download: 'Download history image', open: 'Open history image',
    },
    sizeDialog: {
      title: 'Choose image size', current: 'Current selection: {size}', resolution: 'Resolution',
      aspectRatio: 'Aspect ratio', output: 'Output size', cancel: 'Cancel', confirm: 'Confirm',
    },
    messages: {
      chooseKey: 'Choose an API key.', chooseModel: 'Choose a model available to the current key.',
      choosePrompt: 'Enter a prompt.', loadKeysFailed: 'Failed to load image-generation keys.',
      loadModelsFailed: 'Failed to load models for this key.', generateFailed: 'Image generation failed.',
      generated: 'Images generated.', noImages: 'The API returned no previewable images.',
      downloadFailed: 'Image download failed.', historyLoadFailed: 'Failed to load local history.',
      mobileSaveHint: 'The image is open. Touch and hold it to save.',
      historySaveFailed: 'The image was generated, but local history could not be saved.',
      historyClearFailed: 'Failed to clear local history.', referenceImagesLimit: 'You can select up to four reference images.',
      referenceImageType: 'Reference images must be PNG, JPG, or WEBP.',
      referenceImageTooLarge: 'Each reference image must be 20MB or smaller.',
    },
  },
}
