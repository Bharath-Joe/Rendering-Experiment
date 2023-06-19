import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const ComponentCSR = dynamic(() => import('./component'), {
  prefetch: false, // Disable prefetching
  ssr: false, // Disable server-side rendering for the component
});

const ImageCSR = dynamic(() => import('./image'), {
  prefetch: false, // Disable prefetching
  ssr: false, // Disable server-side rendering for the component
});

// -----------------------------------------------------------------------
const ComponentSSR = dynamic(() => import('./component'), {
  ssr: true, // Enable server-side rendering for the component
  prefetch: false, // Disable prefetching
});

const ImageSSR = dynamic(() => import('./image'), {
  ssr: true, // Enable server-side rendering for the component
  prefetch: false, // Disable prefetching
});


// const Component = dynamic(() => import('./component'));
// const Image = dynamic(() => import('./image'));


export default function Home() {
  const startSSRLoad = performance.now();
  useEffect(() => {
    const endSSRLoad = performance.now();
    const ssrLoadTime = endSSRLoad - startSSRLoad;
    console.log('SSR Load Time:', ssrLoadTime, 'ms');
  }, []);
    const components = [
        {
          title: 'Component 1 - CSR',
          text: "Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 t",
          color: '#FFC0CB'
        },
        {
          title: 'Component 2 - SSR',
          text: "Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 t",
          color: '#ADD8E6'
        },
        {
          title: 'Component 3',
          text: "Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 text Component 3 t",
          color: '#FFD700'
        }
    ];
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h1 style={{ fontSize: '48px', fontWeight: 'bold'}}>CSR vs. SSR Experiment</h1>      
                <h4 style={{ fontSize: '16px'}}>Developed By: Bharath Senthilkumar</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentSSR component={components[1]} />
                <ImageSSR imageUrl={"https://picsum.photos/500"} />
              </div>
            </div>
        </div>
  );
    return (
      <div>
          <div style={{textAlign: 'center'}}>
              <h1 style={{ fontSize: '48px', fontWeight: 'bold'}}>CSR vs. SSR Experiment</h1>      
              <h4 style={{ fontSize: '16px'}}>Developed By: Bharath Senthilkumar</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ComponentCSR component={components[0]} />
              <ImageCSR imageUrl={"https://picsum.photos/500"} />            
            </div>
          </div>
      </div>
  );
}
