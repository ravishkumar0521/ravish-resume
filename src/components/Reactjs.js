import React, { useState } from "react";
import reactImg from "../assets/img/services.jpg";
import beginnerImg from "../assets/img/hero-bg.png";

export default function Reactjs() {
  const [activeTab, setActiveTab] = useState('beginner');

  const tabs = [
    { id: 'beginner', label: 'Beginner', icon: 'bi-play-circle' },
    { id: 'advanced', label: 'Advanced', icon: 'bi-gear' },
    { id: 'examples', label: 'Code Examples', icon: 'bi-code-slash' },
    { id: 'resources', label: 'Resources', icon: 'bi-book' }
  ];

  return (
    <section id="react_js" className="react-js">
      <div className="container">
        <div className="section-title">
          <h2>React.js Development</h2>
          <p>Complete Guide from Beginner to Advanced</p>
        </div>

        {/* Tabs Navigation */}
        <div className="tabs-container">
          <div className="tabs-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={tab.icon}></i>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Beginner Tab */}
            {activeTab === 'beginner' && (
              <div className="tab-panel">
                <div className="section-header">
                  <h3><i className="bi bi-play-circle"></i> React.js for Beginners</h3>
                  <p>Start your React.js journey with fundamental concepts</p>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="topic-content">
                      <h4>Getting Started with React.js</h4>
                      <p>
                        React.js is a powerful JavaScript library for building user interfaces. 
                        As a beginner, you'll learn the core concepts that make React so popular 
                        among developers worldwide.
                      </p>
                      
                      <div className="topic-list">
                        <h5>Beginner Topics:</h5>
                        <ul>
                          <li><strong>Components:</strong> Building blocks of React applications</li>
                          <li><strong>JSX:</strong> JavaScript XML for writing UI components</li>
                          <li><strong>Props:</strong> Passing data between components</li>
                          <li><strong>State:</strong> Managing component data</li>
                          <li><strong>Event Handling:</strong> Responding to user interactions</li>
                          <li><strong>Conditional Rendering:</strong> Showing/hiding elements</li>
                          <li><strong>Lists & Keys:</strong> Rendering dynamic lists</li>
                          <li><strong>Forms:</strong> Handling form inputs and validation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="topic-image">
                      <img 
                        src={beginnerImg} 
                        alt="React.js for Beginners" 
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Advanced Tab */}
            {activeTab === 'advanced' && (
              <div className="tab-panel">
                <div className="section-header">
                  <h3><i className="bi bi-gear"></i> React.js for Advanced Developers</h3>
                  <p>Master advanced React concepts and patterns</p>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="topic-content">
                      <h4>Advanced React.js Concepts</h4>
                      <p>
                        Take your React.js skills to the next level with advanced patterns, 
                        performance optimization, and enterprise-level development techniques.
                      </p>
                      
                      <div className="topic-list">
                        <h5>Advanced Topics:</h5>
                        <ul>
                          <li><strong>Custom Hooks:</strong> Reusable stateful logic</li>
                          <li><strong>Context API:</strong> Global state management</li>
                          <li><strong>Performance Optimization:</strong> React.memo, useMemo, useCallback</li>
                          <li><strong>Error Boundaries:</strong> Error handling patterns</li>
                          <li><strong>Code Splitting:</strong> Lazy loading and dynamic imports</li>
                          <li><strong>Testing:</strong> Unit and integration testing</li>
                          <li><strong>Higher-Order Components:</strong> Component enhancement</li>
                          <li><strong>Render Props:</strong> Component composition patterns</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="topic-image">
                      <img 
                        src={reactImg} 
                        alt="React.js for Advanced" 
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Code Examples Tab */}
            {activeTab === 'examples' && (
              <div className="tab-panel">
                <div className="section-header">
                  <h3><i className="bi bi-code-slash"></i> Code Examples</h3>
                  <p>Practical examples for both beginner and advanced concepts</p>
                </div>

                <div className="code-examples">
                  <h4>Beginner Code Examples</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="code-card">
                        <h5>1. Basic Component</h5>
                        <pre className="language-jsx">
                          <code>{`import React from 'react';

function Welcome() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your first component</p>
    </div>
  );
}

export default Welcome;`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="code-card">
                        <h5>2. Component with Props</h5>
                        <pre className="language-jsx">
                          <code>{`import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>Welcome to React.js</p>
    </div>
  );
}

// Usage
<Greeting name="John" />`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-lg-6">
                      <div className="code-card">
                        <h5>3. State Management</h5>
                        <pre className="language-jsx">
                          <code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="code-card">
                        <h5>4. Event Handling</h5>
                        <pre className="language-jsx">
                          <code>{`import React from 'react';

function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <h4 className="mt-5">Advanced Code Examples</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="code-card">
                        <h5>1. Custom Hook</h5>
                        <pre className="language-jsx">
                          <code>{`import { useState, useEffect } from 'react';

// Custom hook for API calls
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="code-card">
                        <h5>2. Context API with Provider</h5>
                        <pre className="language-jsx">
                          <code>{`import React, { createContext, useContext, useReducer } from 'react';

// Create context
const ThemeContext = createContext();

// Reducer for theme management
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

// Provider component
function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-lg-6">
                      <div className="code-card">
                        <h5>3. Performance Optimization</h5>
                        <pre className="language-jsx">
                          <code>{`import React, { useState, useMemo, useCallback, memo } from 'react';

// Memoized component
const ExpensiveComponent = memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: item.value * 2
    }));
  }, [data]);

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>{item.processed}</div>
      ))}
    </div>
  );
});`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="code-card">
                        <h5>4. Error Boundary</h5>
                        <pre className="language-jsx">
                          <code>{`import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
              <div className="tab-panel">
                <div className="section-header">
                  <h3><i className="bi bi-book"></i> Learning Resources</h3>
                  <p>Complete learning path and resources for React.js</p>
                </div>

                <div className="learning-path">
                  <h3>Complete Learning Path</h3>
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="path-card">
                        <div className="path-number">1</div>
                        <h5>Setup Environment</h5>
                        <p>Install Node.js and Create React App</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="path-card">
                        <div className="path-number">2</div>
                        <h5>Learn JSX & Components</h5>
                        <p>Understand JSX syntax and component structure</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="path-card">
                        <div className="path-number">3</div>
                        <h5>State & Props</h5>
                        <p>Manage component data and communication</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="path-card">
                        <div className="path-number">4</div>
                        <h5>Advanced Patterns</h5>
                        <p>Master hooks, context, and optimization</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="resources">
                  <h3>Learning Resources</h3>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="resource-card">
                        <i className="bi bi-book"></i>
                        <h5>Official Documentation</h5>
                        <p>React.js official docs and tutorials</p>
                        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">Visit Docs</a>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="resource-card">
                        <i className="bi bi-play-circle"></i>
                        <h5>Video Tutorials</h5>
                        <p>Step-by-step video guides for all levels</p>
                        <a href="#" target="_blank" rel="noopener noreferrer">Watch Videos</a>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="resource-card">
                        <i className="bi bi-code-square"></i>
                        <h5>Practice Projects</h5>
                        <p>Hands-on projects to reinforce learning</p>
                        <a href="#" target="_blank" rel="noopener noreferrer">Start Building</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
