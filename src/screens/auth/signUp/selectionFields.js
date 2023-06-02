import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import WrapPasswordTypes from './wrapPasswordTypes'
import { Colors, Layout, Typography } from '../../../styles'
import { SVG_STRINGS } from '../../../../assets/svgStrings'
import AbstractInput from '../../../components/app/abstractInput'
import AbstractButton from '../../../components/app/abstractButton'
import { useAtom } from 'jotai'
import { BocApplicationAtom } from '../../../components/app/atoms/bocAtom'

const SelectionFields = ({ backCall }) => {
    const [showConfirmButton, setShowConfirmButton] = useState(false);
    const [editingItem, setEditingItem] = useState(false);
    const [bocAtom, setBocAtom] = useAtom(BocApplicationAtom)

    const [fields, setFields] = useState([
        {
            _id: 1,
            title: 'Name of your first school',
            value: '',
        },
        {
            _id: 2,
            title: 'Your favourite song',
            value: '',
        },
        {
            _id: 3,
            title: 'Your favourite food',
            value: ''
        },
        {
            _id: 4,
            title: 'Your nick Name',
            value: '',
        },
        {
            _id: 5,
            title: 'Your favourite movie',
            value: '',
        },
        {
            _id: 6,
            title: 'Your favourite color',
            value: '',
        }, {
            _id: 7,
            title: 'Name of a friend',
            value: ''
        }, {
            _id: 8,
            title: 'Name of your mother',
            value: ''
        }, {
            _id: 9,
            title: 'Name of your father',
            value: ''
        }, {
            _id: 10,
            title: 'Your favourite actor',
            value: '',
        }])

    const handleConfirmVisible = () => {
        let filledFields = fields.filter(ls => ls.value !== '').map(ls => ls)
        if (filledFields?.length === 3) {
            setShowConfirmButton(true)
        } else {
            setShowConfirmButton(false)
        }
    }

    const saveQuestionsInformation = () => {
        let filledFields = fields.filter(ls => ls.value !== '').map(ls => ls)

        // console.log("testing", filledFields[0])
        // console.log("testing", filledFields[1])
        // console.log("testing", filledFields[2])

        setBocAtom((bocAtom) => ({
            ...bocAtom,
            question1: {
                id: filledFields[0]._id,
                question: filledFields[0].title,
                answer: filledFields[0].value,
            },
            question2: {
                id: filledFields[1]._id,
                question: filledFields[1].title,
                answer: filledFields[1].value,
            },
            question3: {
                id: filledFields[2]._id,
                question: filledFields[2].title,
                answer: filledFields[2].value,
            },
        }))

        setTimeout(() => {
            backCall && backCall("done");
        }, 1500)

    }

    return (
        <WrapPasswordTypes
            backCall={backCall}
            _wrapStyle={{ width: '100%' }}
            height={60}
            marginTop={20}
        >
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <View style={{ height: 80 }} >

                    {/* title slection field count  */}
                    {
                        showConfirmButton && showConfirmButton === true &&
                        <AbstractButton
                            label={"CONFIRM"}
                            _style={{
                                // backgroundColor: 'red', 
                                alignSelf: 'center',
                                borderRadius: 10,
                                marginTop: 20
                            }}
                            outerHeight={40}
                            height={30}
                            width={220}
                            labelStyle={{
                                fontFamily: Typography.ROBODRON,
                                fontSize: 14,
                                paddingHorizontal: 20,
                                color: Colors.TEXT_COLOR_3
                            }}
                            outerSvg={SVG_STRINGS.gradientConfirm()}
                            onPressButton={() => {
                                saveQuestionsInformation()
                            }}
                            selectionColor={Colors.TEXT_COLOR_3}
                        />
                    }
                    {
                        !showConfirmButton &&
                        <>
                            <Text style={{
                                marginTop: 30,
                                textAlign: 'center',
                                fontFamily: Typography.ROBODRON,
                                fontSize: 11,
                                // lineHeight: 21,
                                color: Colors.TEXT_COLOR_4,
                                textShadowColor: Colors.TEXT_COLOR_4,
                                textShadowOffset: { width: 1, height: 2 },
                                textShadowRadius: 5,
                                shadowOpacity: 0.8
                            }}

                            >FILL ANY 3 FIELDS</Text>
                            {/* line design  */}
                            <View
                                style={{
                                    marginTop: 20,
                                    marginBottom: 30,
                                    height: 3,
                                    backgroundColor: Colors.TEXT_COLOR_4,
                                    opacity: 0.14,
                                    width: 120,
                                    alignSelf: 'center'
                                }}
                            />
                        </>
                    }
                </View>
                {/* List the Selections  */}
                <FlatList
                    removeClippedSubviews={false}
                    // numColumns={1}
                    style={{ flex: 1 }}
                    contentContainerStyle={{
                        // backgroundColor: 'red',
                        alignItems: 'center'
                    }}
                    data={fields}
                    keyExtractor={(item, index) => `key_${index}`}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity style={{
                            height: 50,
                            // width: Layout.WINDOW_WIDTH - 40 , 
                            backgroundColor: Colors.BLACK_COLOR,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderColor: editingItem?._id == item?._id ? Colors.TEXT_COLOR_4 : Colors.WHITE,
                            borderWidth: 1,
                            borderRadius: 5,
                            opacity: 1,
                            width: Layout.WINDOW_WIDTH / 1.3,
                            marginBottom: 20
                        }}
                            onPress={() => setEditingItem(item)}
                        >
                            {
                                ((editingItem?._id == item?._id) || (item?.value !== '')) &&
                                <AbstractInput
                                    value={item?.value}
                                    height={40}
                                    width={'100%'}
                                    autoFocus
                                    selectionColor={Colors.WHITE}
                                    _styleText={styles.fillValueStyle}
                                    textChanged={(txt) => {
                                        let nFields = fields;
                                        nFields[index].value = txt;
                                        setFields([...nFields])
                                        handleConfirmVisible();
                                    }}
                                    onBlur={() => {
                                        handleConfirmVisible();
                                    }}
                                />
                            }
                            {
                                item?.value == '' && editingItem?._id != item?._id &&
                                <Text style={{
                                    // height: 40,
                                    color: Colors.WHITE,
                                    fontFamily: Typography.CALIBRI_REGULAR,
                                    fontSize: 16,
                                    textAlignVertical: 'center'
                                }}> {item?.title} </Text>

                            }
                        </TouchableOpacity>
                    }
                />

            </View>

        </WrapPasswordTypes>
    )
}

export default SelectionFields

const styles = StyleSheet.create({
    fillValueStyle: {
        color: Colors.TEXT_COLOR_4,
        textShadowColor: Colors.TEXT_COLOR_4,
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
        shadowOpacity: 0.8,
        fontFamily: Typography.ROBODRON,
        fontSize: 12,
    }
})
