import React from 'react';
import Delete from './Delete';

function List() {
    
    return (
        <table class="table table-hover">

            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Aller à la boulangerie</td>
                    <td class="text-right">
                        <Delete />
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Faire des courses</td>
                    <td class="text-right">
                        <Delete />
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Aller à la poste</td>
                    <td class="text-right">
                        <Delete />
                    </td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td></td>
                    <td class="text-right">
                        <Delete />
                    </td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td></td>
                    <td class="text-right">
                        <Delete />
                    </td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td></td>
                    <td class="text-right">
                        <Delete />
                    </td>
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td></td>
                    <td class="text-right">
                        <Delete />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default List;