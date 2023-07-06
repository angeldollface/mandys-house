# MANDY NIX INSTALLER 
# by Alexander Abraham a.k.a. "Angel Dollface".
# Licensed under the MIT license.

# Install the Rust toolchain if it isn't installed.
if ! [ -x "$(command -v cargo)" ]; then 
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
else
    echo "Required toolchain installed, proceeding."
fi

# Install Mandy.
cargo install --git https://github.com/angeldollface/mandy --force --tag v.0.2.0
