import React, { Component } from 'react';
import SSIDContext from './SSIDContext';

class SSIDProvider extends Component {

    state = {

        visitor: {
            id: 0,
            firstName: '',
            LastName: '',
            birthDate: '',
            barcode: '',
            emailAddress: '',
            phoneNumber: '',
            imageSrc: '',
            checkinReason: '',
            destination: '',
            isVisitor:false,
            isOfficeUseOnly:false,
            isScanned:false,
        },

        student: {
            id: 0,
            firstName: '',
            LastName: '',
            birthDate: '',
            barcode: '',
            emailAddress: '',
            phoneNumber: '',
            imageSrc: '',
            checkinReason: '',
            destination: '',
            isStudent:false,
            isOfficeUseOnly:false,
        }

    };

    render() {
        return (
            <SSIDContext.Provider
                value={{

                    visitor: this.state.visitor,


                    setValue: newValues => {

                        const visitor = Object.assign(this.state.visitor, newValues);

                        this.setState({ visitor });
                    },


                    resetAll: () => {

                        const visitor = Object.assign({}, this.state.visitor);

                        for (let field in visitor) {
                            visitor[field] = '';
                        }

                        this.setState({ visitor });
                    }
                }}
            >
                {this.props.children}
            </SSIDContext.Provider>
        );
    }
}

export default SSIDProvider;