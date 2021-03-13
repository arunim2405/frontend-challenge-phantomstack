import React, { PureComponent } from 'react';
import axios from "axios";
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';



class PaginatedBooks extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            data: [],
            searchInput:""
        };
    }
    componentDidMount() {
        try{
            axios.get(" https://jsonplaceholder.typicode.com/posts", {
              
            }).then((res) => {
                console.log(res);
                this.setState({
                    data: res.data,
                    isLoading: false
                })
            });
        }catch(e){
            console.log(e)
        }
       
    }
    onSearchChange=(evt)=>{
        console.log(evt.target.value)
        this.setState({
            searchInput: evt.target.value
        })
    }
    render() {
        console.log("DATA", this.state.data)
        const columns=[
        {   field:"id",
            headerName:"S.No",
           
        },
        {   field:"userId",
        headerName:"ID",
         },
         {   field:"title",
         headerName:"Title",
         width:400
          },
          {   field:"body",
          headerName:"Body",
          width:850
           },


        ]
        return (
            <>
            {/* <AppBar > 
            <Toolbar>
         
          <Typography  variant="h6" noWrap>
            Frontend Challenge
          </Typography>
          <div style={{flexDirection:"row", alignContent:"end"}}>
           
            <InputBase
              placeholder="Search…"
                style={{color:"white",flex:1}}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>


            </AppBar> */}
            <TextField value={this.state.searchInput} onChange={(evt)=>this.onSearchChange(evt)} placeholder="Search.."/>
            <div style={{ height: 700, width: '100%', marginTop:100 }}>
                {/* <div className="col-md-12">
                    <h3>About the Property</h3>
                   
                </div> */}
                
                
                <DataGrid rows={this.state.data} columns={columns} pageSize={10}
                
                filterModel={{
                    items: [
                      { columnField: 'title', operatorValue: 'contains', value: this.state.searchInput },
                    ],
                  }}
                />
            </div>
            </>

        );
    }
}

export default PaginatedBooks;