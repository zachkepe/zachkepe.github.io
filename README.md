# zachkepe.github.io

This is my personal website build with [Zola](https://www.getzola.org/) as a portfolio of my work and projects.

## Getting Started

To get a local copy up and running or would like to use this as a template for your own website, follow these steps:

1. Clone the repository
   ```bash
   git clone https://github.com/zachkepe/zachkepe.github.io.git
    ```

2. Install Zola by following the instructions [here](https://www.getzola.org/documentation/getting-started/installation/) or using Homebrew on macOS:
    ```bash
    brew install zola
    ```

3. Change directory to the project folder
    ```bash
    cd zachkepe.github.io
    ```

4. Start the development server
    ```bash
    zola build
    zola serve
    ```
    The website will be available on http://127.0.0.1:1111


## Deployment

To deploy the website, run `deploy.sh` script. It will build the website and push the changes to the `master` branch.

```bash
./deploy.sh
```

Make sure to run `chmod +x deploy.sh` to make the script executable.

Additionally, you need to configure your GitHub Pages settings to deploy from the `master` branch and the `docs/` folder. For more information, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
