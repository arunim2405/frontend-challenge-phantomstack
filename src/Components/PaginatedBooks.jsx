import React, { PureComponent } from 'react';
import axios from "axios";
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField';




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
      
        this.setState({
            searchInput: evt.target.value
        })
    }
    render() {
      
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
            <TextField value={this.state.searchInput} onChange={(evt)=>this.onSearchChange(evt)} placeholder="Search.." style={{marginTop:50}}/>
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