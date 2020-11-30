// React Native Tree View for Android and IOS devices
// https://aboutreact.com/react-native-final-tree-view/

// import React in our code
import React from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, View ,StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements';

//import library for the TreeView
import TreeView from 'react-native-final-tree-view';

//Dummy data for the Tree View
const state = {
  data: [
    {
      id: 'Parent1',
      name: 'Parent1',
      children: [
        {
          id: 'child1',
          name: 'child1',
          children: [
            {
              id: 'child11',
              name: 'child11',
              children: [
                {
                  id: 'child111',
                  name: 'child111',
                },
              ],
            },
            {
              id: 'child12',
              name: 'child12',
            },
          ],
        },
      ],
    },
    {
      id: 'Parent2',
      name: 'Parent2',
      children: [
        {
          id: 'child2',
          name: 'child2',
          children: [
            {
              id: 'child21',
              name: 'child21',
            },
            {
              id: 'child22',
              name: 'child22',
            },
          ],
        },
      ],
    },
  ],
};

const getIndicator = (isExpanded, hasChildrenNodes) => {
  if (!hasChildrenNodes) {
    return '*';
  } else if (isExpanded) {
    return '-';
  } else {
    return '+';
  }
};

const CK_box = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <TreeView
          data={state.data}
          renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
            return (
              <View>
                <Text
                  style={{
                    marginLeft: 25 * level,
                    fontSize: 18,
                  }}>
                  {getIndicator(isExpanded, hasChildrenNodes)} {node.name}
                </Text>
                <CheckBox
                value="Hi"
                onValueChange={()=>alert("0")}
                style={styles.checkbox}
              />
                </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default CK_box;