import * as THREE from 'three';
import  img from './texure/sprite.png'
import  musicfoo from './audio/glitch.mp3'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import  {kk} from  './utils/clickevent.js'

console.log("hello world")
kk.start();
const width = window.innerWidth;
const height = window.innerHeight;
const listener = new THREE.AudioListener();
			
const cameraOrtho = new THREE.OrthographicCamera( - width / 2, width / 2, height / 2, - height / 2, 1, 10 );
				cameraOrtho.position.z = 10;
				const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const map = new THREE.TextureLoader().load(img);
const material =new THREE.SpriteMaterial({

  //color:0xff00ff,

  //rotation:Math.PI/4,

  map: map,
});

cameraOrtho.add(listener);
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( musicfoo, function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});
			var axes = new THREE.AxesHelper(200);
			scene.add(axes);
const sprite = new THREE.Sprite( material );

scene.add( sprite );
sprite.scale.set(500,500,1);
//sprite.rotation.y+=2;
sprite.position.x-=200;
const composer = new EffectComposer( renderer );
const glitchPass = new GlitchPass();
composer.addPass( new RenderPass( scene, cameraOrtho ) );

composer.addPass( glitchPass );
			function animate() {
				requestAnimationFrame( animate );
				if(sprite.position.x<628)
				{
					sprite.position.x+=1;
				}else
				{
					sprite.position.x=-200;
				}
				
				console.log(sprite.position.x);
				//sprite.rotation.y+=2;
				//renderer.render( scene, cameraOrtho);
				composer.render();

			};

			animate();


