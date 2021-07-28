const repositoryName = 'Nome do repositório';

export function RepositoryList() {
    return(

        <section className="repository-list">

            <h1>Lista de repositórios</h1>

            <ul>

                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in react</p>
                    <a href="https://github.com">Acessar repositório</a>
                </li>

                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in react</p>
                    <a href="https://github.com">Acessar repositório</a>
                </li>

                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in react</p>
                    <a href="https://github.com">Acessar repositório</a>
                </li>
                
            </ul>

        </section>

    );
}