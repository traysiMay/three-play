attribute float size;
void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

    gl_PointSize = size * ( 2500.0 / -mvPosition.z );

    gl_Position = projectionMatrix * mvPosition;

}