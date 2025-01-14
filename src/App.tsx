import React from 'react';
import { Tabs } from './components/Tabs';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (chosenTab: Tab) => {
    this.setState({ selectedTab: chosenTab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="container">
        <div className="App w-100 mt-4">
          <h1>
            {`Selected tab is ${selectedTab.title}`}
          </h1>
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTab.id}
            selectTab={this.onTabSelected}
          />
        </div>
      </div>
    );
  }
}

export default App;
