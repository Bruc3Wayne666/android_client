import React, {FC, useState} from 'react';

const ImagePicker: FC = () => {
    const [resourcePath, setResourcePath] = useState({})

    const selectFile = () => {
        const options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose file from custom option...'
                }
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        }

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: response.uri};

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                setResourcePath({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                });
            }
        }
    }

    return (
        <div>

        </div>
    );
};

export default ImagePicker
:
FC;