import React from 'react';
import * as THREE from 'three';
import styles from './DotWaveEffect.module.scss';

export default class DotWaveEffect extends React.Component {

  constructor(props) {
    super(props);

    this.AMOUNTX = 50;
    this.AMOUNTY = 50;
    this.SEPARATION = 100;

    this.vertexShader = `
    attribute float scale;
    void main() {
      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      gl_PointSize = scale * ( 300.0 / - mvPosition.z );
      gl_Position = projectionMatrix * mvPosition;
    }`;

    this.fragmentShader = `
    uniform vec3 color;
    void main() {
    if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
    gl_FragColor = vec4( color, 1.0 );
    }`;

    this.count = 0;

    this.onPointerMove = this.onPointerMove.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  componentDidMount() {
    this.setUp();
    this.initGeometry();
    this.initRenderer();

    window.addEventListener('resize', this.onWindowResize, false);
    window.addEventListener('pointermove', this.onPointerMove, false);

    this.animate();
  }

  setUp() {
    this.camera = new THREE.PerspectiveCamera(50, document.body.clientWidth / document.body.clientHeight, 1, 10000);
    this.camera.position.x = 1000;
    this.camera.position.y = 1000;
    this.camera.position.z = 1000;

    this.scene = new THREE.Scene();

    const offset = new THREE.Vector3(200, 0, 200);
    this.camera.lookAt(offset.add(this.scene.position));
  }

  initGeometry() {
    const material = this.getShaderMaterial();

    const numParticles = this.AMOUNTX * this.AMOUNTY;

    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0;
    let j = 0;

    for (let ix = 0; ix < this.AMOUNTX; ix += 1) {

      for (let iy = 0; iy < this.AMOUNTY; iy += 1) {

        positions[i] = ix * this.SEPARATION - ((this.AMOUNTX * this.SEPARATION) / 2); // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * this.SEPARATION - ((this.AMOUNTY * this.SEPARATION) / 2); // z

        scales[j] = 1;

        i += 3;
        j += 1;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(document.body.clientWidth, document.body.clientHeight);
    this.renderer.setClearColor(0x272733);
    this.mount.appendChild(this.renderer.domElement);
  }

  getShaderMaterial() {
    return new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0x7C7C96) },
      },
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader,
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.renderAnim();
  }

  renderAnim() {

    const positions = this.particles.geometry.attributes.position.array;
    const scales = this.particles.geometry.attributes.scale.array;

    let i = 0;
    let j = 0;

    for (let ix = 0; ix < this.AMOUNTX; ix += 1) {
      for (let iy = 0; iy < this.AMOUNTY; iy += 1) {
        positions[i + 1] = (Math.sin((ix + this.count) * 0.3) * 50)
          + (Math.sin((iy + this.count) * 0.5) * 50);

        scales[j] = (Math.sin((ix + this.count) * 0.3) + 1) * 20
          + (Math.sin((iy + this.count) * 0.5) + 1) * 20;

        i += 3;
        j += 1;
      }

    }

    this.particles.geometry.attributes.position.needsUpdate = true;
    this.particles.geometry.attributes.scale.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);

    this.count += 0.1;
  }

  onWindowResize() {
    this.camera.aspect = document.body.clientWidth / document.body.clientHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(document.body.clientWidth, document.body.clientHeight);
  }

  onPointerMove(event) {

    if (event.isPrimary === false) return;

    this.mouseX = event.clientX - this.windowHalfX;
    this.mouseY = event.clientY - this.windowHalfY;
  }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.effect} ref={(ref) => { this.mount = ref; }} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    );
  }
}
